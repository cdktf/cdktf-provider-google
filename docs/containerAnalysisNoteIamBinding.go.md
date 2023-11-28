# `containerAnalysisNoteIamBinding` Submodule <a name="`containerAnalysisNoteIamBinding` Submodule" id="@cdktf/provider-google.containerAnalysisNoteIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAnalysisNoteIamBinding <a name="ContainerAnalysisNoteIamBinding" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/container_analysis_note_iam_binding google_container_analysis_note_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containeranalysisnoteiambinding"

containeranalysisnoteiambinding.NewContainerAnalysisNoteIamBinding(scope Construct, id *string, config ContainerAnalysisNoteIamBindingConfig) ContainerAnalysisNoteIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig">ContainerAnalysisNoteIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig">ContainerAnalysisNoteIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.putCondition"></a>

```go
func PutCondition(value ContainerAnalysisNoteIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingCondition">ContainerAnalysisNoteIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerAnalysisNoteIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containeranalysisnoteiambinding"

containeranalysisnoteiambinding.ContainerAnalysisNoteIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containeranalysisnoteiambinding"

containeranalysisnoteiambinding.ContainerAnalysisNoteIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containeranalysisnoteiambinding"

containeranalysisnoteiambinding.ContainerAnalysisNoteIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containeranalysisnoteiambinding"

containeranalysisnoteiambinding.ContainerAnalysisNoteIamBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ContainerAnalysisNoteIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ContainerAnalysisNoteIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ContainerAnalysisNoteIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/container_analysis_note_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAnalysisNoteIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference">ContainerAnalysisNoteIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingCondition">ContainerAnalysisNoteIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.noteInput">NoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.note">Note</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.condition"></a>

```go
func Condition() ContainerAnalysisNoteIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference">ContainerAnalysisNoteIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.conditionInput"></a>

```go
func ConditionInput() ContainerAnalysisNoteIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingCondition">ContainerAnalysisNoteIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NoteInput`<sup>Optional</sup> <a name="NoteInput" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.noteInput"></a>

```go
func NoteInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Note`<sup>Required</sup> <a name="Note" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.note"></a>

```go
func Note() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAnalysisNoteIamBindingCondition <a name="ContainerAnalysisNoteIamBindingCondition" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containeranalysisnoteiambinding"

&containeranalysisnoteiambinding.ContainerAnalysisNoteIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/container_analysis_note_iam_binding#expression ContainerAnalysisNoteIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/container_analysis_note_iam_binding#title ContainerAnalysisNoteIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/container_analysis_note_iam_binding#description ContainerAnalysisNoteIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/container_analysis_note_iam_binding#expression ContainerAnalysisNoteIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/container_analysis_note_iam_binding#title ContainerAnalysisNoteIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/container_analysis_note_iam_binding#description ContainerAnalysisNoteIamBinding#description}.

---

### ContainerAnalysisNoteIamBindingConfig <a name="ContainerAnalysisNoteIamBindingConfig" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containeranalysisnoteiambinding"

&containeranalysisnoteiambinding.ContainerAnalysisNoteIamBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Members: *[]*string,
	Note: *string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingCondition,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/container_analysis_note_iam_binding#members ContainerAnalysisNoteIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.note">Note</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/container_analysis_note_iam_binding#note ContainerAnalysisNoteIamBinding#note}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/container_analysis_note_iam_binding#role ContainerAnalysisNoteIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingCondition">ContainerAnalysisNoteIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/container_analysis_note_iam_binding#id ContainerAnalysisNoteIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/container_analysis_note_iam_binding#project ContainerAnalysisNoteIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/container_analysis_note_iam_binding#members ContainerAnalysisNoteIamBinding#members}.

---

##### `Note`<sup>Required</sup> <a name="Note" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.note"></a>

```go
Note *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/container_analysis_note_iam_binding#note ContainerAnalysisNoteIamBinding#note}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/container_analysis_note_iam_binding#role ContainerAnalysisNoteIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.condition"></a>

```go
Condition ContainerAnalysisNoteIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingCondition">ContainerAnalysisNoteIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/container_analysis_note_iam_binding#condition ContainerAnalysisNoteIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/container_analysis_note_iam_binding#id ContainerAnalysisNoteIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/container_analysis_note_iam_binding#project ContainerAnalysisNoteIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAnalysisNoteIamBindingConditionOutputReference <a name="ContainerAnalysisNoteIamBindingConditionOutputReference" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containeranalysisnoteiambinding"

containeranalysisnoteiambinding.NewContainerAnalysisNoteIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAnalysisNoteIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingCondition">ContainerAnalysisNoteIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAnalysisNoteIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNoteIamBinding.ContainerAnalysisNoteIamBindingCondition">ContainerAnalysisNoteIamBindingCondition</a>

---



