# `google_spanner_instance`

Refer to the Terraform Registory for docs: [`google_spanner_instance`](https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance).

# `spannerInstance` Submodule <a name="`spannerInstance` Submodule" id="@cdktf/provider-google.spannerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpannerInstance <a name="SpannerInstance" id="@cdktf/provider-google.spannerInstance.SpannerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance google_spanner_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/spannerinstance"

spannerinstance.NewSpannerInstance(scope Construct, id *string, config SpannerInstanceConfig) SpannerInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig">SpannerInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig">SpannerInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.putAutoscalingConfig">PutAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.resetAutoscalingConfig">ResetAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.resetNumNodes">ResetNumNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.resetProcessingUnits">ResetProcessingUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.spannerInstance.SpannerInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.spannerInstance.SpannerInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.spannerInstance.SpannerInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerInstance.SpannerInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.spannerInstance.SpannerInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.spannerInstance.SpannerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.spannerInstance.SpannerInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.spannerInstance.SpannerInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.spannerInstance.SpannerInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.spannerInstance.SpannerInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.spannerInstance.SpannerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.spannerInstance.SpannerInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerInstance.SpannerInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerInstance.SpannerInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.spannerInstance.SpannerInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.spannerInstance.SpannerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.spannerInstance.SpannerInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutAutoscalingConfig` <a name="PutAutoscalingConfig" id="@cdktf/provider-google.spannerInstance.SpannerInstance.putAutoscalingConfig"></a>

```go
func PutAutoscalingConfig(value SpannerInstanceAutoscalingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerInstance.SpannerInstance.putAutoscalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig">SpannerInstanceAutoscalingConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.spannerInstance.SpannerInstance.putTimeouts"></a>

```go
func PutTimeouts(value SpannerInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerInstance.SpannerInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts">SpannerInstanceTimeouts</a>

---

##### `ResetAutoscalingConfig` <a name="ResetAutoscalingConfig" id="@cdktf/provider-google.spannerInstance.SpannerInstance.resetAutoscalingConfig"></a>

```go
func ResetAutoscalingConfig()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-google.spannerInstance.SpannerInstance.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.spannerInstance.SpannerInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.spannerInstance.SpannerInstance.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.spannerInstance.SpannerInstance.resetName"></a>

```go
func ResetName()
```

##### `ResetNumNodes` <a name="ResetNumNodes" id="@cdktf/provider-google.spannerInstance.SpannerInstance.resetNumNodes"></a>

```go
func ResetNumNodes()
```

##### `ResetProcessingUnits` <a name="ResetProcessingUnits" id="@cdktf/provider-google.spannerInstance.SpannerInstance.resetProcessingUnits"></a>

```go
func ResetProcessingUnits()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.spannerInstance.SpannerInstance.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.spannerInstance.SpannerInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpannerInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.spannerInstance.SpannerInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/spannerinstance"

spannerinstance.SpannerInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerInstance.SpannerInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.spannerInstance.SpannerInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/spannerinstance"

spannerinstance.SpannerInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerInstance.SpannerInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.spannerInstance.SpannerInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/spannerinstance"

spannerinstance.SpannerInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerInstance.SpannerInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.spannerInstance.SpannerInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/spannerinstance"

spannerinstance.SpannerInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SpannerInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.spannerInstance.SpannerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.spannerInstance.SpannerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SpannerInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.spannerInstance.SpannerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SpannerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerInstance.SpannerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SpannerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.autoscalingConfig">AutoscalingConfig</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference">SpannerInstanceAutoscalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference">SpannerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.autoscalingConfigInput">AutoscalingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig">SpannerInstanceAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.configInput">ConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.numNodesInput">NumNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.processingUnitsInput">ProcessingUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.config">Config</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.numNodes">NumNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.processingUnits">ProcessingUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoscalingConfig`<sup>Required</sup> <a name="AutoscalingConfig" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.autoscalingConfig"></a>

```go
func AutoscalingConfig() SpannerInstanceAutoscalingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference">SpannerInstanceAutoscalingConfigOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.timeouts"></a>

```go
func Timeouts() SpannerInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference">SpannerInstanceTimeoutsOutputReference</a>

---

##### `AutoscalingConfigInput`<sup>Optional</sup> <a name="AutoscalingConfigInput" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.autoscalingConfigInput"></a>

```go
func AutoscalingConfigInput() SpannerInstanceAutoscalingConfig
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig">SpannerInstanceAutoscalingConfig</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.configInput"></a>

```go
func ConfigInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NumNodesInput`<sup>Optional</sup> <a name="NumNodesInput" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.numNodesInput"></a>

```go
func NumNodesInput() *f64
```

- *Type:* *f64

---

##### `ProcessingUnitsInput`<sup>Optional</sup> <a name="ProcessingUnitsInput" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.processingUnitsInput"></a>

```go
func ProcessingUnitsInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.config"></a>

```go
func Config() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NumNodes`<sup>Required</sup> <a name="NumNodes" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.numNodes"></a>

```go
func NumNodes() *f64
```

- *Type:* *f64

---

##### `ProcessingUnits`<sup>Required</sup> <a name="ProcessingUnits" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.processingUnits"></a>

```go
func ProcessingUnits() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SpannerInstanceAutoscalingConfig <a name="SpannerInstanceAutoscalingConfig" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/spannerinstance"

&spannerinstance.SpannerInstanceAutoscalingConfig {
	AutoscalingLimits: github.com/cdktf/cdktf-provider-google-go/google/v12.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits,
	AutoscalingTargets: github.com/cdktf/cdktf-provider-google-go/google/v12.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig.property.autoscalingLimits">AutoscalingLimits</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits">SpannerInstanceAutoscalingConfigAutoscalingLimits</a></code> | autoscaling_limits block. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig.property.autoscalingTargets">AutoscalingTargets</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets">SpannerInstanceAutoscalingConfigAutoscalingTargets</a></code> | autoscaling_targets block. |

---

##### `AutoscalingLimits`<sup>Optional</sup> <a name="AutoscalingLimits" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig.property.autoscalingLimits"></a>

```go
AutoscalingLimits SpannerInstanceAutoscalingConfigAutoscalingLimits
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits">SpannerInstanceAutoscalingConfigAutoscalingLimits</a>

autoscaling_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#autoscaling_limits SpannerInstance#autoscaling_limits}

---

##### `AutoscalingTargets`<sup>Optional</sup> <a name="AutoscalingTargets" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig.property.autoscalingTargets"></a>

```go
AutoscalingTargets SpannerInstanceAutoscalingConfigAutoscalingTargets
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets">SpannerInstanceAutoscalingConfigAutoscalingTargets</a>

autoscaling_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#autoscaling_targets SpannerInstance#autoscaling_targets}

---

### SpannerInstanceAutoscalingConfigAutoscalingLimits <a name="SpannerInstanceAutoscalingConfigAutoscalingLimits" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/spannerinstance"

&spannerinstance.SpannerInstanceAutoscalingConfigAutoscalingLimits {
	MaxProcessingUnits: *f64,
	MinProcessingUnits: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits.property.maxProcessingUnits">MaxProcessingUnits</a></code> | <code>*f64</code> | Specifies maximum number of processing units allocated to the instance. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits.property.minProcessingUnits">MinProcessingUnits</a></code> | <code>*f64</code> | Specifies minimum number of processing units allocated to the instance. If set, this number should be multiples of 1000. |

---

##### `MaxProcessingUnits`<sup>Optional</sup> <a name="MaxProcessingUnits" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits.property.maxProcessingUnits"></a>

```go
MaxProcessingUnits *f64
```

- *Type:* *f64

Specifies maximum number of processing units allocated to the instance.

If set, this number should be multiples of 1000 and be greater than or equal to
min_processing_units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#max_processing_units SpannerInstance#max_processing_units}

---

##### `MinProcessingUnits`<sup>Optional</sup> <a name="MinProcessingUnits" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits.property.minProcessingUnits"></a>

```go
MinProcessingUnits *f64
```

- *Type:* *f64

Specifies minimum number of processing units allocated to the instance. If set, this number should be multiples of 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#min_processing_units SpannerInstance#min_processing_units}

---

### SpannerInstanceAutoscalingConfigAutoscalingTargets <a name="SpannerInstanceAutoscalingConfigAutoscalingTargets" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/spannerinstance"

&spannerinstance.SpannerInstanceAutoscalingConfigAutoscalingTargets {
	HighPriorityCpuUtilizationPercent: *f64,
	StorageUtilizationPercent: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets.property.highPriorityCpuUtilizationPercent">HighPriorityCpuUtilizationPercent</a></code> | <code>*f64</code> | Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets.property.storageUtilizationPercent">StorageUtilizationPercent</a></code> | <code>*f64</code> | Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance. |

---

##### `HighPriorityCpuUtilizationPercent`<sup>Optional</sup> <a name="HighPriorityCpuUtilizationPercent" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets.property.highPriorityCpuUtilizationPercent"></a>

```go
HighPriorityCpuUtilizationPercent *f64
```

- *Type:* *f64

Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance.

This number is on a scale from 0 (no utilization) to 100 (full utilization)..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#high_priority_cpu_utilization_percent SpannerInstance#high_priority_cpu_utilization_percent}

---

##### `StorageUtilizationPercent`<sup>Optional</sup> <a name="StorageUtilizationPercent" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets.property.storageUtilizationPercent"></a>

```go
StorageUtilizationPercent *f64
```

- *Type:* *f64

Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance.

This number is on a scale from 0 (no utilization) to 100 (full utilization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#storage_utilization_percent SpannerInstance#storage_utilization_percent}

---

### SpannerInstanceConfig <a name="SpannerInstanceConfig" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/spannerinstance"

&spannerinstance.SpannerInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Config: *string,
	DisplayName: *string,
	AutoscalingConfig: github.com/cdktf/cdktf-provider-google-go/google/v12.spannerInstance.SpannerInstanceAutoscalingConfig,
	ForceDestroy: interface{},
	Id: *string,
	Labels: *map[string]*string,
	Name: *string,
	NumNodes: *f64,
	ProcessingUnits: *f64,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v12.spannerInstance.SpannerInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.config">Config</a></code> | <code>*string</code> | The name of the instance's configuration (similar but not quite the same as a region) which defines the geographic placement and replication of your databases in this instance. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The descriptive name for this instance as it appears in UIs. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.autoscalingConfig">AutoscalingConfig</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig">SpannerInstanceAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | When deleting a spanner instance, this boolean option will delete all backups of this instance. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#id SpannerInstance#id}. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.name">Name</a></code> | <code>*string</code> | A unique identifier for the instance, which cannot be changed after the instance is created. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.numNodes">NumNodes</a></code> | <code>*f64</code> | The number of nodes allocated to this instance. Exactly one of either node_count or processing_units must be present in terraform. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.processingUnits">ProcessingUnits</a></code> | <code>*f64</code> | The number of processing units allocated to this instance. Exactly one of processing_units or node_count must be present in terraform. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#project SpannerInstance#project}. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts">SpannerInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.config"></a>

```go
Config *string
```

- *Type:* *string

The name of the instance's configuration (similar but not quite the same as a region) which defines the geographic placement and replication of your databases in this instance.

It determines where your data
is stored. Values are typically of the form 'regional-europe-west1' , 'us-central' etc.
In order to obtain a valid list please consult the
[Configuration section of the docs](https://cloud.google.com/spanner/docs/instances).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#config SpannerInstance#config}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The descriptive name for this instance as it appears in UIs.

Must be
unique per project and between 4 and 30 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#display_name SpannerInstance#display_name}

---

##### `AutoscalingConfig`<sup>Optional</sup> <a name="AutoscalingConfig" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.autoscalingConfig"></a>

```go
AutoscalingConfig SpannerInstanceAutoscalingConfig
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig">SpannerInstanceAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#autoscaling_config SpannerInstance#autoscaling_config}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

When deleting a spanner instance, this boolean option will delete all backups of this instance.

This must be set to true if you created a backup manually in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#force_destroy SpannerInstance#force_destroy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#id SpannerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#labels SpannerInstance#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A unique identifier for the instance, which cannot be changed after the instance is created.

The name must be between 6 and 30 characters
in length.

If not provided, a random string starting with 'tf-' will be selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#name SpannerInstance#name}

---

##### `NumNodes`<sup>Optional</sup> <a name="NumNodes" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.numNodes"></a>

```go
NumNodes *f64
```

- *Type:* *f64

The number of nodes allocated to this instance. Exactly one of either node_count or processing_units must be present in terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#num_nodes SpannerInstance#num_nodes}

---

##### `ProcessingUnits`<sup>Optional</sup> <a name="ProcessingUnits" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.processingUnits"></a>

```go
ProcessingUnits *f64
```

- *Type:* *f64

The number of processing units allocated to this instance. Exactly one of processing_units or node_count must be present in terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#processing_units SpannerInstance#processing_units}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#project SpannerInstance#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.timeouts"></a>

```go
Timeouts SpannerInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts">SpannerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#timeouts SpannerInstance#timeouts}

---

### SpannerInstanceTimeouts <a name="SpannerInstanceTimeouts" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/spannerinstance"

&spannerinstance.SpannerInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#create SpannerInstance#create}. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#delete SpannerInstance#delete}. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#update SpannerInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#create SpannerInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#delete SpannerInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/spanner_instance#update SpannerInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference <a name="SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/spannerinstance"

spannerinstance.NewSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxProcessingUnits">ResetMaxProcessingUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMinProcessingUnits">ResetMinProcessingUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxProcessingUnits` <a name="ResetMaxProcessingUnits" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxProcessingUnits"></a>

```go
func ResetMaxProcessingUnits()
```

##### `ResetMinProcessingUnits` <a name="ResetMinProcessingUnits" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMinProcessingUnits"></a>

```go
func ResetMinProcessingUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput">MaxProcessingUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnitsInput">MinProcessingUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnits">MaxProcessingUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnits">MinProcessingUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits">SpannerInstanceAutoscalingConfigAutoscalingLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxProcessingUnitsInput`<sup>Optional</sup> <a name="MaxProcessingUnitsInput" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput"></a>

```go
func MaxProcessingUnitsInput() *f64
```

- *Type:* *f64

---

##### `MinProcessingUnitsInput`<sup>Optional</sup> <a name="MinProcessingUnitsInput" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnitsInput"></a>

```go
func MinProcessingUnitsInput() *f64
```

- *Type:* *f64

---

##### `MaxProcessingUnits`<sup>Required</sup> <a name="MaxProcessingUnits" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnits"></a>

```go
func MaxProcessingUnits() *f64
```

- *Type:* *f64

---

##### `MinProcessingUnits`<sup>Required</sup> <a name="MinProcessingUnits" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnits"></a>

```go
func MinProcessingUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() SpannerInstanceAutoscalingConfigAutoscalingLimits
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits">SpannerInstanceAutoscalingConfigAutoscalingLimits</a>

---


### SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference <a name="SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/spannerinstance"

spannerinstance.NewSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetHighPriorityCpuUtilizationPercent">ResetHighPriorityCpuUtilizationPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetStorageUtilizationPercent">ResetStorageUtilizationPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHighPriorityCpuUtilizationPercent` <a name="ResetHighPriorityCpuUtilizationPercent" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetHighPriorityCpuUtilizationPercent"></a>

```go
func ResetHighPriorityCpuUtilizationPercent()
```

##### `ResetStorageUtilizationPercent` <a name="ResetStorageUtilizationPercent" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetStorageUtilizationPercent"></a>

```go
func ResetStorageUtilizationPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercentInput">HighPriorityCpuUtilizationPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercentInput">StorageUtilizationPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercent">HighPriorityCpuUtilizationPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercent">StorageUtilizationPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets">SpannerInstanceAutoscalingConfigAutoscalingTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HighPriorityCpuUtilizationPercentInput`<sup>Optional</sup> <a name="HighPriorityCpuUtilizationPercentInput" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercentInput"></a>

```go
func HighPriorityCpuUtilizationPercentInput() *f64
```

- *Type:* *f64

---

##### `StorageUtilizationPercentInput`<sup>Optional</sup> <a name="StorageUtilizationPercentInput" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercentInput"></a>

```go
func StorageUtilizationPercentInput() *f64
```

- *Type:* *f64

---

##### `HighPriorityCpuUtilizationPercent`<sup>Required</sup> <a name="HighPriorityCpuUtilizationPercent" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercent"></a>

```go
func HighPriorityCpuUtilizationPercent() *f64
```

- *Type:* *f64

---

##### `StorageUtilizationPercent`<sup>Required</sup> <a name="StorageUtilizationPercent" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercent"></a>

```go
func StorageUtilizationPercent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() SpannerInstanceAutoscalingConfigAutoscalingTargets
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets">SpannerInstanceAutoscalingConfigAutoscalingTargets</a>

---


### SpannerInstanceAutoscalingConfigOutputReference <a name="SpannerInstanceAutoscalingConfigOutputReference" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/spannerinstance"

spannerinstance.NewSpannerInstanceAutoscalingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpannerInstanceAutoscalingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits">PutAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAutoscalingTargets">PutAutoscalingTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingLimits">ResetAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingTargets">ResetAutoscalingTargets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscalingLimits` <a name="PutAutoscalingLimits" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits"></a>

```go
func PutAutoscalingLimits(value SpannerInstanceAutoscalingConfigAutoscalingLimits)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits">SpannerInstanceAutoscalingConfigAutoscalingLimits</a>

---

##### `PutAutoscalingTargets` <a name="PutAutoscalingTargets" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAutoscalingTargets"></a>

```go
func PutAutoscalingTargets(value SpannerInstanceAutoscalingConfigAutoscalingTargets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAutoscalingTargets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets">SpannerInstanceAutoscalingConfigAutoscalingTargets</a>

---

##### `ResetAutoscalingLimits` <a name="ResetAutoscalingLimits" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingLimits"></a>

```go
func ResetAutoscalingLimits()
```

##### `ResetAutoscalingTargets` <a name="ResetAutoscalingTargets" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingTargets"></a>

```go
func ResetAutoscalingTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimits">AutoscalingLimits</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference">SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargets">AutoscalingTargets</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference">SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimitsInput">AutoscalingLimitsInput</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits">SpannerInstanceAutoscalingConfigAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargetsInput">AutoscalingTargetsInput</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets">SpannerInstanceAutoscalingConfigAutoscalingTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig">SpannerInstanceAutoscalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscalingLimits`<sup>Required</sup> <a name="AutoscalingLimits" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimits"></a>

```go
func AutoscalingLimits() SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference">SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference</a>

---

##### `AutoscalingTargets`<sup>Required</sup> <a name="AutoscalingTargets" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargets"></a>

```go
func AutoscalingTargets() SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference">SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference</a>

---

##### `AutoscalingLimitsInput`<sup>Optional</sup> <a name="AutoscalingLimitsInput" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimitsInput"></a>

```go
func AutoscalingLimitsInput() SpannerInstanceAutoscalingConfigAutoscalingLimits
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits">SpannerInstanceAutoscalingConfigAutoscalingLimits</a>

---

##### `AutoscalingTargetsInput`<sup>Optional</sup> <a name="AutoscalingTargetsInput" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargetsInput"></a>

```go
func AutoscalingTargetsInput() SpannerInstanceAutoscalingConfigAutoscalingTargets
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets">SpannerInstanceAutoscalingConfigAutoscalingTargets</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SpannerInstanceAutoscalingConfig
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig">SpannerInstanceAutoscalingConfig</a>

---


### SpannerInstanceTimeoutsOutputReference <a name="SpannerInstanceTimeoutsOutputReference" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/spannerinstance"

spannerinstance.NewSpannerInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpannerInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



