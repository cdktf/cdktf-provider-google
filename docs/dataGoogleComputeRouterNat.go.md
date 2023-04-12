# `dataGoogleComputeRouterNat` Submodule <a name="`dataGoogleComputeRouterNat` Submodule" id="@cdktf/provider-google.dataGoogleComputeRouterNat"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRouterNat <a name="DataGoogleComputeRouterNat" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/compute_router_nat google_compute_router_nat}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputerouternat"

datagooglecomputerouternat.NewDataGoogleComputeRouterNat(scope Construct, id *string, config DataGoogleComputeRouterNatConfig) DataGoogleComputeRouterNat
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig">DataGoogleComputeRouterNatConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig">DataGoogleComputeRouterNatConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputerouternat"

datagooglecomputerouternat.DataGoogleComputeRouterNat_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputerouternat"

datagooglecomputerouternat.DataGoogleComputeRouterNat_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputerouternat"

datagooglecomputerouternat.DataGoogleComputeRouterNat_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.drainNatIps">DrainNatIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.enableDynamicPortAllocation">EnableDynamicPortAllocation</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.enableEndpointIndependentMapping">EnableEndpointIndependentMapping</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.icmpIdleTimeoutSec">IcmpIdleTimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList">DataGoogleComputeRouterNatLogConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.maxPortsPerVm">MaxPortsPerVm</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.minPortsPerVm">MinPortsPerVm</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.natIpAllocateOption">NatIpAllocateOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.natIps">NatIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList">DataGoogleComputeRouterNatRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.sourceSubnetworkIpRangesToNat">SourceSubnetworkIpRangesToNat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.subnetwork">Subnetwork</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList">DataGoogleComputeRouterNatSubnetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.tcpEstablishedIdleTimeoutSec">TcpEstablishedIdleTimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.tcpTimeWaitTimeoutSec">TcpTimeWaitTimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.tcpTransitoryIdleTimeoutSec">TcpTransitoryIdleTimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.udpIdleTimeoutSec">UdpIdleTimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.routerInput">RouterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.router">Router</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DrainNatIps`<sup>Required</sup> <a name="DrainNatIps" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.drainNatIps"></a>

```go
func DrainNatIps() *[]*string
```

- *Type:* *[]*string

---

##### `EnableDynamicPortAllocation`<sup>Required</sup> <a name="EnableDynamicPortAllocation" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.enableDynamicPortAllocation"></a>

```go
func EnableDynamicPortAllocation() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnableEndpointIndependentMapping`<sup>Required</sup> <a name="EnableEndpointIndependentMapping" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.enableEndpointIndependentMapping"></a>

```go
func EnableEndpointIndependentMapping() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IcmpIdleTimeoutSec`<sup>Required</sup> <a name="IcmpIdleTimeoutSec" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.icmpIdleTimeoutSec"></a>

```go
func IcmpIdleTimeoutSec() *f64
```

- *Type:* *f64

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.logConfig"></a>

```go
func LogConfig() DataGoogleComputeRouterNatLogConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList">DataGoogleComputeRouterNatLogConfigList</a>

---

##### `MaxPortsPerVm`<sup>Required</sup> <a name="MaxPortsPerVm" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.maxPortsPerVm"></a>

```go
func MaxPortsPerVm() *f64
```

- *Type:* *f64

---

##### `MinPortsPerVm`<sup>Required</sup> <a name="MinPortsPerVm" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.minPortsPerVm"></a>

```go
func MinPortsPerVm() *f64
```

- *Type:* *f64

---

##### `NatIpAllocateOption`<sup>Required</sup> <a name="NatIpAllocateOption" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.natIpAllocateOption"></a>

```go
func NatIpAllocateOption() *string
```

- *Type:* *string

---

##### `NatIps`<sup>Required</sup> <a name="NatIps" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.natIps"></a>

```go
func NatIps() *[]*string
```

- *Type:* *[]*string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.rules"></a>

```go
func Rules() DataGoogleComputeRouterNatRulesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList">DataGoogleComputeRouterNatRulesList</a>

---

##### `SourceSubnetworkIpRangesToNat`<sup>Required</sup> <a name="SourceSubnetworkIpRangesToNat" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.sourceSubnetworkIpRangesToNat"></a>

```go
func SourceSubnetworkIpRangesToNat() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.subnetwork"></a>

```go
func Subnetwork() DataGoogleComputeRouterNatSubnetworkList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList">DataGoogleComputeRouterNatSubnetworkList</a>

---

##### `TcpEstablishedIdleTimeoutSec`<sup>Required</sup> <a name="TcpEstablishedIdleTimeoutSec" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.tcpEstablishedIdleTimeoutSec"></a>

```go
func TcpEstablishedIdleTimeoutSec() *f64
```

- *Type:* *f64

---

##### `TcpTimeWaitTimeoutSec`<sup>Required</sup> <a name="TcpTimeWaitTimeoutSec" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.tcpTimeWaitTimeoutSec"></a>

```go
func TcpTimeWaitTimeoutSec() *f64
```

- *Type:* *f64

---

##### `TcpTransitoryIdleTimeoutSec`<sup>Required</sup> <a name="TcpTransitoryIdleTimeoutSec" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.tcpTransitoryIdleTimeoutSec"></a>

```go
func TcpTransitoryIdleTimeoutSec() *f64
```

- *Type:* *f64

---

##### `UdpIdleTimeoutSec`<sup>Required</sup> <a name="UdpIdleTimeoutSec" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.udpIdleTimeoutSec"></a>

```go
func UdpIdleTimeoutSec() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.routerInput"></a>

```go
func RouterInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.router"></a>

```go
func Router() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNat.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRouterNatConfig <a name="DataGoogleComputeRouterNatConfig" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputerouternat"

&datagooglecomputerouternat.DataGoogleComputeRouterNatConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Router: *string,
	Id: *string,
	Project: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.name">Name</a></code> | <code>*string</code> | Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.router">Router</a></code> | <code>*string</code> | The name of the Cloud Router in which this NAT will be configured. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_router_nat#id DataGoogleComputeRouterNat#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_router_nat#project DataGoogleComputeRouterNat#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.region">Region</a></code> | <code>*string</code> | Region where the router and NAT reside. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_router_nat#name DataGoogleComputeRouterNat#name}

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.router"></a>

```go
Router *string
```

- *Type:* *string

The name of the Cloud Router in which this NAT will be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_router_nat#router DataGoogleComputeRouterNat#router}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_router_nat#id DataGoogleComputeRouterNat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_router_nat#project DataGoogleComputeRouterNat#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where the router and NAT reside.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_router_nat#region DataGoogleComputeRouterNat#region}

---

### DataGoogleComputeRouterNatLogConfig <a name="DataGoogleComputeRouterNatLogConfig" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputerouternat"

&datagooglecomputerouternat.DataGoogleComputeRouterNatLogConfig {

}
```


### DataGoogleComputeRouterNatRules <a name="DataGoogleComputeRouterNatRules" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputerouternat"

&datagooglecomputerouternat.DataGoogleComputeRouterNatRules {

}
```


### DataGoogleComputeRouterNatRulesAction <a name="DataGoogleComputeRouterNatRulesAction" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputerouternat"

&datagooglecomputerouternat.DataGoogleComputeRouterNatRulesAction {

}
```


### DataGoogleComputeRouterNatSubnetwork <a name="DataGoogleComputeRouterNatSubnetwork" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputerouternat"

&datagooglecomputerouternat.DataGoogleComputeRouterNatSubnetwork {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeRouterNatLogConfigList <a name="DataGoogleComputeRouterNatLogConfigList" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputerouternat"

datagooglecomputerouternat.NewDataGoogleComputeRouterNatLogConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeRouterNatLogConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComputeRouterNatLogConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeRouterNatLogConfigOutputReference <a name="DataGoogleComputeRouterNatLogConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputerouternat"

datagooglecomputerouternat.NewDataGoogleComputeRouterNatLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeRouterNatLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.property.enable">Enable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfig">DataGoogleComputeRouterNatLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.property.enable"></a>

```go
func Enable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeRouterNatLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatLogConfig">DataGoogleComputeRouterNatLogConfig</a>

---


### DataGoogleComputeRouterNatRulesActionList <a name="DataGoogleComputeRouterNatRulesActionList" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputerouternat"

datagooglecomputerouternat.NewDataGoogleComputeRouterNatRulesActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeRouterNatRulesActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList.get"></a>

```go
func Get(index *f64) DataGoogleComputeRouterNatRulesActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeRouterNatRulesActionOutputReference <a name="DataGoogleComputeRouterNatRulesActionOutputReference" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputerouternat"

datagooglecomputerouternat.NewDataGoogleComputeRouterNatRulesActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeRouterNatRulesActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIps">SourceNatActiveIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIps">SourceNatDrainIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesAction">DataGoogleComputeRouterNatRulesAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceNatActiveIps`<sup>Required</sup> <a name="SourceNatActiveIps" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIps"></a>

```go
func SourceNatActiveIps() *[]*string
```

- *Type:* *[]*string

---

##### `SourceNatDrainIps`<sup>Required</sup> <a name="SourceNatDrainIps" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIps"></a>

```go
func SourceNatDrainIps() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeRouterNatRulesAction
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesAction">DataGoogleComputeRouterNatRulesAction</a>

---


### DataGoogleComputeRouterNatRulesList <a name="DataGoogleComputeRouterNatRulesList" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputerouternat"

datagooglecomputerouternat.NewDataGoogleComputeRouterNatRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeRouterNatRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList.get"></a>

```go
func Get(index *f64) DataGoogleComputeRouterNatRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeRouterNatRulesOutputReference <a name="DataGoogleComputeRouterNatRulesOutputReference" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputerouternat"

datagooglecomputerouternat.NewDataGoogleComputeRouterNatRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeRouterNatRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList">DataGoogleComputeRouterNatRulesActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.property.match">Match</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.property.ruleNumber">RuleNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRules">DataGoogleComputeRouterNatRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.property.action"></a>

```go
func Action() DataGoogleComputeRouterNatRulesActionList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesActionList">DataGoogleComputeRouterNatRulesActionList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.property.match"></a>

```go
func Match() *string
```

- *Type:* *string

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.property.ruleNumber"></a>

```go
func RuleNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeRouterNatRules
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatRules">DataGoogleComputeRouterNatRules</a>

---


### DataGoogleComputeRouterNatSubnetworkList <a name="DataGoogleComputeRouterNatSubnetworkList" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputerouternat"

datagooglecomputerouternat.NewDataGoogleComputeRouterNatSubnetworkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeRouterNatSubnetworkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList.get"></a>

```go
func Get(index *f64) DataGoogleComputeRouterNatSubnetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeRouterNatSubnetworkOutputReference <a name="DataGoogleComputeRouterNatSubnetworkOutputReference" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputerouternat"

datagooglecomputerouternat.NewDataGoogleComputeRouterNatSubnetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeRouterNatSubnetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNames">SecondaryIpRangeNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNat">SourceIpRangesToNat</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetwork">DataGoogleComputeRouterNatSubnetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecondaryIpRangeNames`<sup>Required</sup> <a name="SecondaryIpRangeNames" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNames"></a>

```go
func SecondaryIpRangeNames() *[]*string
```

- *Type:* *[]*string

---

##### `SourceIpRangesToNat`<sup>Required</sup> <a name="SourceIpRangesToNat" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNat"></a>

```go
func SourceIpRangesToNat() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeRouterNatSubnetwork
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRouterNat.DataGoogleComputeRouterNatSubnetwork">DataGoogleComputeRouterNatSubnetwork</a>

---



