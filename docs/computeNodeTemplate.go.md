# `computeNodeTemplate` Submodule <a name="`computeNodeTemplate` Submodule" id="@cdktf/provider-google.computeNodeTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNodeTemplate <a name="ComputeNodeTemplate" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_node_template google_compute_node_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodetemplate"

computenodetemplate.NewComputeNodeTemplate(scope Construct, id *string, config ComputeNodeTemplateConfig) ComputeNodeTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig">ComputeNodeTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig">ComputeNodeTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putNodeTypeFlexibility">PutNodeTypeFlexibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putServerBinding">PutServerBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetCpuOvercommitType">ResetCpuOvercommitType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeAffinityLabels">ResetNodeAffinityLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeType">ResetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeTypeFlexibility">ResetNodeTypeFlexibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetServerBinding">ResetServerBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutNodeTypeFlexibility` <a name="PutNodeTypeFlexibility" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putNodeTypeFlexibility"></a>

```go
func PutNodeTypeFlexibility(value ComputeNodeTemplateNodeTypeFlexibility)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putNodeTypeFlexibility.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a>

---

##### `PutServerBinding` <a name="PutServerBinding" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putServerBinding"></a>

```go
func PutServerBinding(value ComputeNodeTemplateServerBinding)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putServerBinding.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putTimeouts"></a>

```go
func PutTimeouts(value ComputeNodeTemplateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts">ComputeNodeTemplateTimeouts</a>

---

##### `ResetCpuOvercommitType` <a name="ResetCpuOvercommitType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetCpuOvercommitType"></a>

```go
func ResetCpuOvercommitType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetName"></a>

```go
func ResetName()
```

##### `ResetNodeAffinityLabels` <a name="ResetNodeAffinityLabels" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeAffinityLabels"></a>

```go
func ResetNodeAffinityLabels()
```

##### `ResetNodeType` <a name="ResetNodeType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeType"></a>

```go
func ResetNodeType()
```

##### `ResetNodeTypeFlexibility` <a name="ResetNodeTypeFlexibility" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeTypeFlexibility"></a>

```go
func ResetNodeTypeFlexibility()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetServerBinding` <a name="ResetServerBinding" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetServerBinding"></a>

```go
func ResetServerBinding()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodetemplate"

computenodetemplate.ComputeNodeTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodetemplate"

computenodetemplate.ComputeNodeTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodetemplate"

computenodetemplate.ComputeNodeTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeFlexibility">NodeTypeFlexibility</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference">ComputeNodeTemplateNodeTypeFlexibilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.serverBinding">ServerBinding</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference">ComputeNodeTemplateServerBindingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference">ComputeNodeTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cpuOvercommitTypeInput">CpuOvercommitTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeAffinityLabelsInput">NodeAffinityLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeFlexibilityInput">NodeTypeFlexibilityInput</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeInput">NodeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.serverBindingInput">ServerBindingInput</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cpuOvercommitType">CpuOvercommitType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeAffinityLabels">NodeAffinityLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `NodeTypeFlexibility`<sup>Required</sup> <a name="NodeTypeFlexibility" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeFlexibility"></a>

```go
func NodeTypeFlexibility() ComputeNodeTemplateNodeTypeFlexibilityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference">ComputeNodeTemplateNodeTypeFlexibilityOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `ServerBinding`<sup>Required</sup> <a name="ServerBinding" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.serverBinding"></a>

```go
func ServerBinding() ComputeNodeTemplateServerBindingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference">ComputeNodeTemplateServerBindingOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.timeouts"></a>

```go
func Timeouts() ComputeNodeTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference">ComputeNodeTemplateTimeoutsOutputReference</a>

---

##### `CpuOvercommitTypeInput`<sup>Optional</sup> <a name="CpuOvercommitTypeInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cpuOvercommitTypeInput"></a>

```go
func CpuOvercommitTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeAffinityLabelsInput`<sup>Optional</sup> <a name="NodeAffinityLabelsInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeAffinityLabelsInput"></a>

```go
func NodeAffinityLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NodeTypeFlexibilityInput`<sup>Optional</sup> <a name="NodeTypeFlexibilityInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeFlexibilityInput"></a>

```go
func NodeTypeFlexibilityInput() ComputeNodeTemplateNodeTypeFlexibility
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a>

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeInput"></a>

```go
func NodeTypeInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServerBindingInput`<sup>Optional</sup> <a name="ServerBindingInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.serverBindingInput"></a>

```go
func ServerBindingInput() ComputeNodeTemplateServerBinding
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CpuOvercommitType`<sup>Required</sup> <a name="CpuOvercommitType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cpuOvercommitType"></a>

```go
func CpuOvercommitType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeAffinityLabels`<sup>Required</sup> <a name="NodeAffinityLabels" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeAffinityLabels"></a>

```go
func NodeAffinityLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNodeTemplateConfig <a name="ComputeNodeTemplateConfig" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodetemplate"

&computenodetemplate.ComputeNodeTemplateConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CpuOvercommitType: *string,
	Description: *string,
	Id: *string,
	Name: *string,
	NodeAffinityLabels: *map[string]*string,
	NodeType: *string,
	NodeTypeFlexibility: github.com/cdktf/cdktf-provider-google-go/google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility,
	Project: *string,
	Region: *string,
	ServerBinding: github.com/cdktf/cdktf-provider-google-go/google.computeNodeTemplate.ComputeNodeTemplateServerBinding,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeNodeTemplate.ComputeNodeTemplateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.cpuOvercommitType">CpuOvercommitType</a></code> | <code>*string</code> | CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"]. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.description">Description</a></code> | <code>*string</code> | An optional textual description of the resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template#id ComputeNodeTemplate#id}. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeAffinityLabels">NodeAffinityLabels</a></code> | <code>*map[string]*string</code> | Labels to use for node affinity, which will be used in instance scheduling. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeType">NodeType</a></code> | <code>*string</code> | Node type to use for nodes group that are created from this template. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeTypeFlexibility">NodeTypeFlexibility</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a></code> | node_type_flexibility block. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template#project ComputeNodeTemplate#project}. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.region">Region</a></code> | <code>*string</code> | Region where nodes using the node template will be created. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.serverBinding">ServerBinding</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a></code> | server_binding block. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts">ComputeNodeTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CpuOvercommitType`<sup>Optional</sup> <a name="CpuOvercommitType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.cpuOvercommitType"></a>

```go
CpuOvercommitType *string
```

- *Type:* *string

CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template#cpu_overcommit_type ComputeNodeTemplate#cpu_overcommit_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional textual description of the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template#description ComputeNodeTemplate#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template#id ComputeNodeTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template#name ComputeNodeTemplate#name}

---

##### `NodeAffinityLabels`<sup>Optional</sup> <a name="NodeAffinityLabels" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeAffinityLabels"></a>

```go
NodeAffinityLabels *map[string]*string
```

- *Type:* *map[string]*string

Labels to use for node affinity, which will be used in instance scheduling.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template#node_affinity_labels ComputeNodeTemplate#node_affinity_labels}

---

##### `NodeType`<sup>Optional</sup> <a name="NodeType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeType"></a>

```go
NodeType *string
```

- *Type:* *string

Node type to use for nodes group that are created from this template.

Only one of nodeTypeFlexibility and nodeType can be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template#node_type ComputeNodeTemplate#node_type}

---

##### `NodeTypeFlexibility`<sup>Optional</sup> <a name="NodeTypeFlexibility" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeTypeFlexibility"></a>

```go
NodeTypeFlexibility ComputeNodeTemplateNodeTypeFlexibility
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a>

node_type_flexibility block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template#node_type_flexibility ComputeNodeTemplate#node_type_flexibility}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template#project ComputeNodeTemplate#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where nodes using the node template will be created. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template#region ComputeNodeTemplate#region}

---

##### `ServerBinding`<sup>Optional</sup> <a name="ServerBinding" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.serverBinding"></a>

```go
ServerBinding ComputeNodeTemplateServerBinding
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a>

server_binding block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template#server_binding ComputeNodeTemplate#server_binding}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.timeouts"></a>

```go
Timeouts ComputeNodeTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts">ComputeNodeTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template#timeouts ComputeNodeTemplate#timeouts}

---

### ComputeNodeTemplateNodeTypeFlexibility <a name="ComputeNodeTemplateNodeTypeFlexibility" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodetemplate"

&computenodetemplate.ComputeNodeTemplateNodeTypeFlexibility {
	Cpus: *string,
	Memory: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility.property.cpus">Cpus</a></code> | <code>*string</code> | Number of virtual CPUs to use. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility.property.memory">Memory</a></code> | <code>*string</code> | Physical memory available to the node, defined in MB. |

---

##### `Cpus`<sup>Optional</sup> <a name="Cpus" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility.property.cpus"></a>

```go
Cpus *string
```

- *Type:* *string

Number of virtual CPUs to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template#cpus ComputeNodeTemplate#cpus}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility.property.memory"></a>

```go
Memory *string
```

- *Type:* *string

Physical memory available to the node, defined in MB.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template#memory ComputeNodeTemplate#memory}

---

### ComputeNodeTemplateServerBinding <a name="ComputeNodeTemplateServerBinding" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodetemplate"

&computenodetemplate.ComputeNodeTemplateServerBinding {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding.property.type">Type</a></code> | <code>*string</code> | Type of server binding policy. If 'RESTART_NODE_ON_ANY_SERVER', nodes using this template will restart on any physical server following a maintenance event. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of server binding policy. If 'RESTART_NODE_ON_ANY_SERVER', nodes using this template will restart on any physical server following a maintenance event.

If 'RESTART_NODE_ON_MINIMAL_SERVER', nodes using this template
will restart on the same physical server following a maintenance
event, instead of being live migrated to or restarted on a new
physical server. This option may be useful if you are using
software licenses tied to the underlying server characteristics
such as physical sockets or cores, to avoid the need for
additional licenses when maintenance occurs. However, VMs on such
nodes will experience outages while maintenance is applied. Possible values: ["RESTART_NODE_ON_ANY_SERVER", "RESTART_NODE_ON_MINIMAL_SERVERS"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template#type ComputeNodeTemplate#type}

---

### ComputeNodeTemplateTimeouts <a name="ComputeNodeTemplateTimeouts" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodetemplate"

&computenodetemplate.ComputeNodeTemplateTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template#create ComputeNodeTemplate#create}. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template#delete ComputeNodeTemplate#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template#create ComputeNodeTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template#delete ComputeNodeTemplate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNodeTemplateNodeTypeFlexibilityOutputReference <a name="ComputeNodeTemplateNodeTypeFlexibilityOutputReference" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodetemplate"

computenodetemplate.NewComputeNodeTemplateNodeTypeFlexibilityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeNodeTemplateNodeTypeFlexibilityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetCpus">ResetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpus` <a name="ResetCpus" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetCpus"></a>

```go
func ResetCpus()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetMemory"></a>

```go
func ResetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.localSsd">LocalSsd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpusInput">CpusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memoryInput">MemoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpus">Cpus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memory">Memory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalSsd`<sup>Required</sup> <a name="LocalSsd" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.localSsd"></a>

```go
func LocalSsd() *string
```

- *Type:* *string

---

##### `CpusInput`<sup>Optional</sup> <a name="CpusInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpusInput"></a>

```go
func CpusInput() *string
```

- *Type:* *string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memoryInput"></a>

```go
func MemoryInput() *string
```

- *Type:* *string

---

##### `Cpus`<sup>Required</sup> <a name="Cpus" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpus"></a>

```go
func Cpus() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memory"></a>

```go
func Memory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeNodeTemplateNodeTypeFlexibility
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a>

---


### ComputeNodeTemplateServerBindingOutputReference <a name="ComputeNodeTemplateServerBindingOutputReference" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodetemplate"

computenodetemplate.NewComputeNodeTemplateServerBindingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeNodeTemplateServerBindingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeNodeTemplateServerBinding
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a>

---


### ComputeNodeTemplateTimeoutsOutputReference <a name="ComputeNodeTemplateTimeoutsOutputReference" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodetemplate"

computenodetemplate.NewComputeNodeTemplateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeNodeTemplateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



