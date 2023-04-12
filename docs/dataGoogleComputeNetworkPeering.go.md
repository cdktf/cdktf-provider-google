# `dataGoogleComputeNetworkPeering` Submodule <a name="`dataGoogleComputeNetworkPeering` Submodule" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeNetworkPeering <a name="DataGoogleComputeNetworkPeering" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/compute_network_peering google_compute_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputenetworkpeering"

datagooglecomputenetworkpeering.NewDataGoogleComputeNetworkPeering(scope Construct, id *string, config DataGoogleComputeNetworkPeeringConfig) DataGoogleComputeNetworkPeering
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig">DataGoogleComputeNetworkPeeringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig">DataGoogleComputeNetworkPeeringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.putTimeouts"></a>

```go
func PutTimeouts(value DataGoogleComputeNetworkPeeringTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeouts">DataGoogleComputeNetworkPeeringTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputenetworkpeering"

datagooglecomputenetworkpeering.DataGoogleComputeNetworkPeering_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputenetworkpeering"

datagooglecomputenetworkpeering.DataGoogleComputeNetworkPeering_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputenetworkpeering"

datagooglecomputenetworkpeering.DataGoogleComputeNetworkPeering_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.exportCustomRoutes">ExportCustomRoutes</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.exportSubnetRoutesWithPublicIp">ExportSubnetRoutesWithPublicIp</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.importCustomRoutes">ImportCustomRoutes</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.importSubnetRoutesWithPublicIp">ImportSubnetRoutesWithPublicIp</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.peerNetwork">PeerNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.stateDetails">StateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference">DataGoogleComputeNetworkPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.network">Network</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ExportCustomRoutes`<sup>Required</sup> <a name="ExportCustomRoutes" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.exportCustomRoutes"></a>

```go
func ExportCustomRoutes() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExportSubnetRoutesWithPublicIp`<sup>Required</sup> <a name="ExportSubnetRoutesWithPublicIp" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.exportSubnetRoutesWithPublicIp"></a>

```go
func ExportSubnetRoutesWithPublicIp() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ImportCustomRoutes`<sup>Required</sup> <a name="ImportCustomRoutes" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.importCustomRoutes"></a>

```go
func ImportCustomRoutes() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ImportSubnetRoutesWithPublicIp`<sup>Required</sup> <a name="ImportSubnetRoutesWithPublicIp" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.importSubnetRoutesWithPublicIp"></a>

```go
func ImportSubnetRoutesWithPublicIp() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PeerNetwork`<sup>Required</sup> <a name="PeerNetwork" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.peerNetwork"></a>

```go
func PeerNetwork() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateDetails`<sup>Required</sup> <a name="StateDetails" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.stateDetails"></a>

```go
func StateDetails() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.timeouts"></a>

```go
func Timeouts() DataGoogleComputeNetworkPeeringTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference">DataGoogleComputeNetworkPeeringTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeering.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeNetworkPeeringConfig <a name="DataGoogleComputeNetworkPeeringConfig" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputenetworkpeering"

&datagooglecomputenetworkpeering.DataGoogleComputeNetworkPeeringConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Network: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig.property.name">Name</a></code> | <code>*string</code> | Name of the peering. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig.property.network">Network</a></code> | <code>*string</code> | The primary network of the peering. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_network_peering#id DataGoogleComputeNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeouts">DataGoogleComputeNetworkPeeringTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the peering.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_network_peering#name DataGoogleComputeNetworkPeering#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The primary network of the peering.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_network_peering#network DataGoogleComputeNetworkPeering#network}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_network_peering#id DataGoogleComputeNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringConfig.property.timeouts"></a>

```go
Timeouts DataGoogleComputeNetworkPeeringTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeouts">DataGoogleComputeNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_network_peering#timeouts DataGoogleComputeNetworkPeering#timeouts}

---

### DataGoogleComputeNetworkPeeringTimeouts <a name="DataGoogleComputeNetworkPeeringTimeouts" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputenetworkpeering"

&datagooglecomputenetworkpeering.DataGoogleComputeNetworkPeeringTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_network_peering#read DataGoogleComputeNetworkPeering#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_network_peering#read DataGoogleComputeNetworkPeering#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeNetworkPeeringTimeoutsOutputReference <a name="DataGoogleComputeNetworkPeeringTimeoutsOutputReference" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputenetworkpeering"

datagooglecomputenetworkpeering.NewDataGoogleComputeNetworkPeeringTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataGoogleComputeNetworkPeeringTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeNetworkPeering.DataGoogleComputeNetworkPeeringTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



