# `contactCenterInsightsView` Submodule <a name="`contactCenterInsightsView` Submodule" id="@cdktf/provider-google.contactCenterInsightsView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactCenterInsightsView <a name="ContactCenterInsightsView" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_view google_contact_center_insights_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/contactcenterinsightsview"

contactcenterinsightsview.NewContactCenterInsightsView(scope Construct, id *string, config ContactCenterInsightsViewConfig) ContactCenterInsightsView
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig">ContactCenterInsightsViewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig">ContactCenterInsightsViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.putTimeouts"></a>

```go
func PutTimeouts(value ContactCenterInsightsViewTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeouts">ContactCenterInsightsViewTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.resetValue"></a>

```go
func ResetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContactCenterInsightsView resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/contactcenterinsightsview"

contactcenterinsightsview.ContactCenterInsightsView_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/contactcenterinsightsview"

contactcenterinsightsview.ContactCenterInsightsView_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/contactcenterinsightsview"

contactcenterinsightsview.ContactCenterInsightsView_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/contactcenterinsightsview"

contactcenterinsightsview.ContactCenterInsightsView_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ContactCenterInsightsView resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ContactCenterInsightsView to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ContactCenterInsightsView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ContactCenterInsightsView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference">ContactCenterInsightsViewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.value">Value</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.timeouts"></a>

```go
func Timeouts() ContactCenterInsightsViewTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference">ContactCenterInsightsViewTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsView.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContactCenterInsightsViewConfig <a name="ContactCenterInsightsViewConfig" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/contactcenterinsightsview"

&contactcenterinsightsview.ContactCenterInsightsViewConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	DisplayName: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.contactCenterInsightsView.ContactCenterInsightsViewTimeouts,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.location">Location</a></code> | <code>*string</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The human-readable display name of the view. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_view#id ContactCenterInsightsView#id}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_view#project ContactCenterInsightsView#project}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeouts">ContactCenterInsightsViewTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.value">Value</a></code> | <code>*string</code> | A filter to reduce conversation results to a specific subset. Refer to https://cloud.google.com/contact-center/insights/docs/filtering for details. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_view#location ContactCenterInsightsView#location}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The human-readable display name of the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_view#display_name ContactCenterInsightsView#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_view#id ContactCenterInsightsView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_view#project ContactCenterInsightsView#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.timeouts"></a>

```go
Timeouts ContactCenterInsightsViewTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeouts">ContactCenterInsightsViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_view#timeouts ContactCenterInsightsView#timeouts}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewConfig.property.value"></a>

```go
Value *string
```

- *Type:* *string

A filter to reduce conversation results to a specific subset. Refer to https://cloud.google.com/contact-center/insights/docs/filtering for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_view#value ContactCenterInsightsView#value}

---

### ContactCenterInsightsViewTimeouts <a name="ContactCenterInsightsViewTimeouts" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/contactcenterinsightsview"

&contactcenterinsightsview.ContactCenterInsightsViewTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_view#create ContactCenterInsightsView#create}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_view#delete ContactCenterInsightsView#delete}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_view#update ContactCenterInsightsView#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_view#create ContactCenterInsightsView#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_view#delete ContactCenterInsightsView#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_view#update ContactCenterInsightsView#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContactCenterInsightsViewTimeoutsOutputReference <a name="ContactCenterInsightsViewTimeoutsOutputReference" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/contactcenterinsightsview"

contactcenterinsightsview.NewContactCenterInsightsViewTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContactCenterInsightsViewTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.contactCenterInsightsView.ContactCenterInsightsViewTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



