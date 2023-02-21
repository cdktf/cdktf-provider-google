# `dataGoogleComputeRegionNetworkEndpointGroup` Submodule <a name="`dataGoogleComputeRegionNetworkEndpointGroup` Submodule" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRegionNetworkEndpointGroup <a name="DataGoogleComputeRegionNetworkEndpointGroup" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/compute_region_network_endpoint_group google_compute_region_network_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregionnetworkendpointgroup"

datagooglecomputeregionnetworkendpointgroup.NewDataGoogleComputeRegionNetworkEndpointGroup(scope Construct, id *string, config DataGoogleComputeRegionNetworkEndpointGroupConfig) DataGoogleComputeRegionNetworkEndpointGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig">DataGoogleComputeRegionNetworkEndpointGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig">DataGoogleComputeRegionNetworkEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetSelfLink">ResetSelfLink</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetName"></a>

```go
func ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSelfLink` <a name="ResetSelfLink" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetSelfLink"></a>

```go
func ResetSelfLink()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregionnetworkendpointgroup"

datagooglecomputeregionnetworkendpointgroup.DataGoogleComputeRegionNetworkEndpointGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregionnetworkendpointgroup"

datagooglecomputeregionnetworkendpointgroup.DataGoogleComputeRegionNetworkEndpointGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregionnetworkendpointgroup"

datagooglecomputeregionnetworkendpointgroup.DataGoogleComputeRegionNetworkEndpointGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.appEngine">AppEngine</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList">DataGoogleComputeRegionNetworkEndpointGroupAppEngineList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.cloudFunction">CloudFunction</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList">DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.cloudRun">CloudRun</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList">DataGoogleComputeRegionNetworkEndpointGroupCloudRunList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.networkEndpointType">NetworkEndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.pscTargetService">PscTargetService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.selfLinkInput">SelfLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AppEngine`<sup>Required</sup> <a name="AppEngine" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.appEngine"></a>

```go
func AppEngine() DataGoogleComputeRegionNetworkEndpointGroupAppEngineList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList">DataGoogleComputeRegionNetworkEndpointGroupAppEngineList</a>

---

##### `CloudFunction`<sup>Required</sup> <a name="CloudFunction" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.cloudFunction"></a>

```go
func CloudFunction() DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList">DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList</a>

---

##### `CloudRun`<sup>Required</sup> <a name="CloudRun" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.cloudRun"></a>

```go
func CloudRun() DataGoogleComputeRegionNetworkEndpointGroupCloudRunList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList">DataGoogleComputeRegionNetworkEndpointGroupCloudRunList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NetworkEndpointType`<sup>Required</sup> <a name="NetworkEndpointType" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.networkEndpointType"></a>

```go
func NetworkEndpointType() *string
```

- *Type:* *string

---

##### `PscTargetService`<sup>Required</sup> <a name="PscTargetService" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.pscTargetService"></a>

```go
func PscTargetService() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SelfLinkInput`<sup>Optional</sup> <a name="SelfLinkInput" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.selfLinkInput"></a>

```go
func SelfLinkInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRegionNetworkEndpointGroupAppEngine <a name="DataGoogleComputeRegionNetworkEndpointGroupAppEngine" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngine.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregionnetworkendpointgroup"

&datagooglecomputeregionnetworkendpointgroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngine {

}
```


### DataGoogleComputeRegionNetworkEndpointGroupCloudFunction <a name="DataGoogleComputeRegionNetworkEndpointGroupCloudFunction" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregionnetworkendpointgroup"

&datagooglecomputeregionnetworkendpointgroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunction {

}
```


### DataGoogleComputeRegionNetworkEndpointGroupCloudRun <a name="DataGoogleComputeRegionNetworkEndpointGroupCloudRun" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRun.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregionnetworkendpointgroup"

&datagooglecomputeregionnetworkendpointgroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRun {

}
```


### DataGoogleComputeRegionNetworkEndpointGroupConfig <a name="DataGoogleComputeRegionNetworkEndpointGroupConfig" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregionnetworkendpointgroup"

&datagooglecomputeregionnetworkendpointgroup.DataGoogleComputeRegionNetworkEndpointGroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Name: *string,
	Project: *string,
	Region: *string,
	SelfLink: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_region_network_endpoint_group#id DataGoogleComputeRegionNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_region_network_endpoint_group#project DataGoogleComputeRegionNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.region">Region</a></code> | <code>*string</code> | A reference to the region where the Serverless NEGs Reside. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.selfLink">SelfLink</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_region_network_endpoint_group#self_link DataGoogleComputeRegionNetworkEndpointGroup#self_link}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_region_network_endpoint_group#id DataGoogleComputeRegionNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_region_network_endpoint_group#name DataGoogleComputeRegionNetworkEndpointGroup#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_region_network_endpoint_group#project DataGoogleComputeRegionNetworkEndpointGroup#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

A reference to the region where the Serverless NEGs Reside.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_region_network_endpoint_group#region DataGoogleComputeRegionNetworkEndpointGroup#region}

---

##### `SelfLink`<sup>Optional</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.selfLink"></a>

```go
SelfLink *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_region_network_endpoint_group#self_link DataGoogleComputeRegionNetworkEndpointGroup#self_link}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeRegionNetworkEndpointGroupAppEngineList <a name="DataGoogleComputeRegionNetworkEndpointGroupAppEngineList" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregionnetworkendpointgroup"

datagooglecomputeregionnetworkendpointgroup.NewDataGoogleComputeRegionNetworkEndpointGroupAppEngineList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeRegionNetworkEndpointGroupAppEngineList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.get"></a>

```go
func Get(index *f64) DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference <a name="DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregionnetworkendpointgroup"

datagooglecomputeregionnetworkendpointgroup.NewDataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMask">UrlMask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngine">DataGoogleComputeRegionNetworkEndpointGroupAppEngine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `UrlMask`<sup>Required</sup> <a name="UrlMask" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMask"></a>

```go
func UrlMask() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeRegionNetworkEndpointGroupAppEngine
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngine">DataGoogleComputeRegionNetworkEndpointGroupAppEngine</a>

---


### DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList <a name="DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregionnetworkendpointgroup"

datagooglecomputeregionnetworkendpointgroup.NewDataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.get"></a>

```go
func Get(index *f64) DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference <a name="DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregionnetworkendpointgroup"

datagooglecomputeregionnetworkendpointgroup.NewDataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.function">Function</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMask">UrlMask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunction">DataGoogleComputeRegionNetworkEndpointGroupCloudFunction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.function"></a>

```go
func Function() *string
```

- *Type:* *string

---

##### `UrlMask`<sup>Required</sup> <a name="UrlMask" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMask"></a>

```go
func UrlMask() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeRegionNetworkEndpointGroupCloudFunction
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunction">DataGoogleComputeRegionNetworkEndpointGroupCloudFunction</a>

---


### DataGoogleComputeRegionNetworkEndpointGroupCloudRunList <a name="DataGoogleComputeRegionNetworkEndpointGroupCloudRunList" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregionnetworkendpointgroup"

datagooglecomputeregionnetworkendpointgroup.NewDataGoogleComputeRegionNetworkEndpointGroupCloudRunList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeRegionNetworkEndpointGroupCloudRunList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.get"></a>

```go
func Get(index *f64) DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference <a name="DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregionnetworkendpointgroup"

datagooglecomputeregionnetworkendpointgroup.NewDataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMask">UrlMask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRun">DataGoogleComputeRegionNetworkEndpointGroupCloudRun</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `UrlMask`<sup>Required</sup> <a name="UrlMask" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMask"></a>

```go
func UrlMask() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeRegionNetworkEndpointGroupCloudRun
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRun">DataGoogleComputeRegionNetworkEndpointGroupCloudRun</a>

---



