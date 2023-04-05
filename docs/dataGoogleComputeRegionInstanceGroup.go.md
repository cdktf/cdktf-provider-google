# `dataGoogleComputeRegionInstanceGroup` Submodule <a name="`dataGoogleComputeRegionInstanceGroup` Submodule" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRegionInstanceGroup <a name="DataGoogleComputeRegionInstanceGroup" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/compute_region_instance_group google_compute_region_instance_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregioninstancegroup"

datagooglecomputeregioninstancegroup.NewDataGoogleComputeRegionInstanceGroup(scope Construct, id *string, config DataGoogleComputeRegionInstanceGroupConfig) DataGoogleComputeRegionInstanceGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig">DataGoogleComputeRegionInstanceGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig">DataGoogleComputeRegionInstanceGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetSelfLink">ResetSelfLink</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetName"></a>

```go
func ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSelfLink` <a name="ResetSelfLink" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetSelfLink"></a>

```go
func ResetSelfLink()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregioninstancegroup"

datagooglecomputeregioninstancegroup.DataGoogleComputeRegionInstanceGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregioninstancegroup"

datagooglecomputeregioninstancegroup.DataGoogleComputeRegionInstanceGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregioninstancegroup"

datagooglecomputeregioninstancegroup.DataGoogleComputeRegionInstanceGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.instances">Instances</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList">DataGoogleComputeRegionInstanceGroupInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.selfLinkInput">SelfLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.instances"></a>

```go
func Instances() DataGoogleComputeRegionInstanceGroupInstancesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList">DataGoogleComputeRegionInstanceGroupInstancesList</a>

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SelfLinkInput`<sup>Optional</sup> <a name="SelfLinkInput" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.selfLinkInput"></a>

```go
func SelfLinkInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRegionInstanceGroupConfig <a name="DataGoogleComputeRegionInstanceGroupConfig" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregioninstancegroup"

&datagooglecomputeregioninstancegroup.DataGoogleComputeRegionInstanceGroupConfig {
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
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_region_instance_group#id DataGoogleComputeRegionInstanceGroup#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_region_instance_group#name DataGoogleComputeRegionInstanceGroup#name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_region_instance_group#project DataGoogleComputeRegionInstanceGroup#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_region_instance_group#region DataGoogleComputeRegionInstanceGroup#region}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.selfLink">SelfLink</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_region_instance_group#self_link DataGoogleComputeRegionInstanceGroup#self_link}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_region_instance_group#id DataGoogleComputeRegionInstanceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_region_instance_group#name DataGoogleComputeRegionInstanceGroup#name}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_region_instance_group#project DataGoogleComputeRegionInstanceGroup#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_region_instance_group#region DataGoogleComputeRegionInstanceGroup#region}.

---

##### `SelfLink`<sup>Optional</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.selfLink"></a>

```go
SelfLink *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_region_instance_group#self_link DataGoogleComputeRegionInstanceGroup#self_link}.

---

### DataGoogleComputeRegionInstanceGroupInstances <a name="DataGoogleComputeRegionInstanceGroupInstances" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstances.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregioninstancegroup"

&datagooglecomputeregioninstancegroup.DataGoogleComputeRegionInstanceGroupInstances {

}
```


### DataGoogleComputeRegionInstanceGroupInstancesNamedPorts <a name="DataGoogleComputeRegionInstanceGroupInstancesNamedPorts" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPorts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregioninstancegroup"

&datagooglecomputeregioninstancegroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPorts {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeRegionInstanceGroupInstancesList <a name="DataGoogleComputeRegionInstanceGroupInstancesList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregioninstancegroup"

datagooglecomputeregioninstancegroup.NewDataGoogleComputeRegionInstanceGroupInstancesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeRegionInstanceGroupInstancesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.get"></a>

```go
func Get(index *f64) DataGoogleComputeRegionInstanceGroupInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList <a name="DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregioninstancegroup"

datagooglecomputeregioninstancegroup.NewDataGoogleComputeRegionInstanceGroupInstancesNamedPortsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.get"></a>

```go
func Get(index *f64) DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference <a name="DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregioninstancegroup"

datagooglecomputeregioninstancegroup.NewDataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPorts">DataGoogleComputeRegionInstanceGroupInstancesNamedPorts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeRegionInstanceGroupInstancesNamedPorts
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPorts">DataGoogleComputeRegionInstanceGroupInstancesNamedPorts</a>

---


### DataGoogleComputeRegionInstanceGroupInstancesOutputReference <a name="DataGoogleComputeRegionInstanceGroupInstancesOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeregioninstancegroup"

datagooglecomputeregioninstancegroup.NewDataGoogleComputeRegionInstanceGroupInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeRegionInstanceGroupInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.namedPorts">NamedPorts</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList">DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstances">DataGoogleComputeRegionInstanceGroupInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `NamedPorts`<sup>Required</sup> <a name="NamedPorts" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.namedPorts"></a>

```go
func NamedPorts() DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList">DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeRegionInstanceGroupInstances
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstances">DataGoogleComputeRegionInstanceGroupInstances</a>

---



