# `projectIamCustomRole` Submodule <a name="`projectIamCustomRole` Submodule" id="@cdktf/provider-google.projectIamCustomRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIamCustomRole <a name="ProjectIamCustomRole" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/project_iam_custom_role google_project_iam_custom_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/projectiamcustomrole"

projectiamcustomrole.NewProjectIamCustomRole(scope Construct, id *string, config ProjectIamCustomRoleConfig) ProjectIamCustomRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig">ProjectIamCustomRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig">ProjectIamCustomRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.resetStage">ResetStage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.resetProject"></a>

```go
func ResetProject()
```

##### `ResetStage` <a name="ResetStage" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.resetStage"></a>

```go
func ResetStage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIamCustomRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/projectiamcustomrole"

projectiamcustomrole.ProjectIamCustomRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/projectiamcustomrole"

projectiamcustomrole.ProjectIamCustomRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/projectiamcustomrole"

projectiamcustomrole.ProjectIamCustomRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/projectiamcustomrole"

projectiamcustomrole.ProjectIamCustomRole_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ProjectIamCustomRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ProjectIamCustomRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ProjectIamCustomRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/project_iam_custom_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIamCustomRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.deleted">Deleted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.permissionsInput">PermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.roleIdInput">RoleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.stageInput">StageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.roleId">RoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.stage">Stage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.title">Title</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Deleted`<sup>Required</sup> <a name="Deleted" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.deleted"></a>

```go
func Deleted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.permissionsInput"></a>

```go
func PermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleIdInput`<sup>Optional</sup> <a name="RoleIdInput" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.roleIdInput"></a>

```go
func RoleIdInput() *string
```

- *Type:* *string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.stageInput"></a>

```go
func StageInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.roleId"></a>

```go
func RoleId() *string
```

- *Type:* *string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.stage"></a>

```go
func Stage() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIamCustomRoleConfig <a name="ProjectIamCustomRoleConfig" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/projectiamcustomrole"

&projectiamcustomrole.ProjectIamCustomRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Permissions: *[]*string,
	RoleId: *string,
	Title: *string,
	Description: *string,
	Id: *string,
	Project: *string,
	Stage: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.permissions">Permissions</a></code> | <code>*[]*string</code> | The names of the permissions this role grants when bound in an IAM policy. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.roleId">RoleId</a></code> | <code>*string</code> | The camel case role id to use for this role. Cannot contain - characters. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.title">Title</a></code> | <code>*string</code> | A human-readable title for the role. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.description">Description</a></code> | <code>*string</code> | A human-readable description for the role. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/project_iam_custom_role#id ProjectIamCustomRole#id}. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.project">Project</a></code> | <code>*string</code> | The project that the service account will be created in. Defaults to the provider project configuration. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.stage">Stage</a></code> | <code>*string</code> | The current launch stage of the role. Defaults to GA. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.permissions"></a>

```go
Permissions *[]*string
```

- *Type:* *[]*string

The names of the permissions this role grants when bound in an IAM policy.

At least one permission must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/project_iam_custom_role#permissions ProjectIamCustomRole#permissions}

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.roleId"></a>

```go
RoleId *string
```

- *Type:* *string

The camel case role id to use for this role. Cannot contain - characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/project_iam_custom_role#role_id ProjectIamCustomRole#role_id}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

A human-readable title for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/project_iam_custom_role#title ProjectIamCustomRole#title}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/project_iam_custom_role#description ProjectIamCustomRole#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/project_iam_custom_role#id ProjectIamCustomRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project that the service account will be created in. Defaults to the provider project configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/project_iam_custom_role#project ProjectIamCustomRole#project}

---

##### `Stage`<sup>Optional</sup> <a name="Stage" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.stage"></a>

```go
Stage *string
```

- *Type:* *string

The current launch stage of the role. Defaults to GA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/project_iam_custom_role#stage ProjectIamCustomRole#stage}

---



