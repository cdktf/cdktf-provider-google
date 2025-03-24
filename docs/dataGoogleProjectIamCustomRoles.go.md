# `dataGoogleProjectIamCustomRoles` Submodule <a name="`dataGoogleProjectIamCustomRoles` Submodule" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleProjectIamCustomRoles <a name="DataGoogleProjectIamCustomRoles" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/project_iam_custom_roles google_project_iam_custom_roles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprojectiamcustomroles"

datagoogleprojectiamcustomroles.NewDataGoogleProjectIamCustomRoles(scope Construct, id *string, config DataGoogleProjectIamCustomRolesConfig) DataGoogleProjectIamCustomRoles
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig">DataGoogleProjectIamCustomRolesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig">DataGoogleProjectIamCustomRolesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.resetShowDeleted">ResetShowDeleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.resetView">ResetView</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.resetProject"></a>

```go
func ResetProject()
```

##### `ResetShowDeleted` <a name="ResetShowDeleted" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.resetShowDeleted"></a>

```go
func ResetShowDeleted()
```

##### `ResetView` <a name="ResetView" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.resetView"></a>

```go
func ResetView()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleProjectIamCustomRoles resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprojectiamcustomroles"

datagoogleprojectiamcustomroles.DataGoogleProjectIamCustomRoles_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprojectiamcustomroles"

datagoogleprojectiamcustomroles.DataGoogleProjectIamCustomRoles_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprojectiamcustomroles"

datagoogleprojectiamcustomroles.DataGoogleProjectIamCustomRoles_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprojectiamcustomroles"

datagoogleprojectiamcustomroles.DataGoogleProjectIamCustomRoles_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleProjectIamCustomRoles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleProjectIamCustomRoles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleProjectIamCustomRoles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/project_iam_custom_roles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleProjectIamCustomRoles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.roles">Roles</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList">DataGoogleProjectIamCustomRolesRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.showDeletedInput">ShowDeletedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.viewInput">ViewInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.showDeleted">ShowDeleted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.view">View</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.roles"></a>

```go
func Roles() DataGoogleProjectIamCustomRolesRolesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList">DataGoogleProjectIamCustomRolesRolesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ShowDeletedInput`<sup>Optional</sup> <a name="ShowDeletedInput" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.showDeletedInput"></a>

```go
func ShowDeletedInput() interface{}
```

- *Type:* interface{}

---

##### `ViewInput`<sup>Optional</sup> <a name="ViewInput" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.viewInput"></a>

```go
func ViewInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ShowDeleted`<sup>Required</sup> <a name="ShowDeleted" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.showDeleted"></a>

```go
func ShowDeleted() interface{}
```

- *Type:* interface{}

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.view"></a>

```go
func View() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleProjectIamCustomRolesConfig <a name="DataGoogleProjectIamCustomRolesConfig" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprojectiamcustomroles"

&datagoogleprojectiamcustomroles.DataGoogleProjectIamCustomRolesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Project: *string,
	ShowDeleted: interface{},
	View: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/project_iam_custom_roles#id DataGoogleProjectIamCustomRoles#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/project_iam_custom_roles#project DataGoogleProjectIamCustomRoles#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.showDeleted">ShowDeleted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/project_iam_custom_roles#show_deleted DataGoogleProjectIamCustomRoles#show_deleted}. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.view">View</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/project_iam_custom_roles#view DataGoogleProjectIamCustomRoles#view}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/project_iam_custom_roles#id DataGoogleProjectIamCustomRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/project_iam_custom_roles#project DataGoogleProjectIamCustomRoles#project}.

---

##### `ShowDeleted`<sup>Optional</sup> <a name="ShowDeleted" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.showDeleted"></a>

```go
ShowDeleted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/project_iam_custom_roles#show_deleted DataGoogleProjectIamCustomRoles#show_deleted}.

---

##### `View`<sup>Optional</sup> <a name="View" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.view"></a>

```go
View *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/project_iam_custom_roles#view DataGoogleProjectIamCustomRoles#view}.

---

### DataGoogleProjectIamCustomRolesRoles <a name="DataGoogleProjectIamCustomRolesRoles" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRoles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprojectiamcustomroles"

&datagoogleprojectiamcustomroles.DataGoogleProjectIamCustomRolesRoles {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleProjectIamCustomRolesRolesList <a name="DataGoogleProjectIamCustomRolesRolesList" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprojectiamcustomroles"

datagoogleprojectiamcustomroles.NewDataGoogleProjectIamCustomRolesRolesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleProjectIamCustomRolesRolesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.get"></a>

```go
func Get(index *f64) DataGoogleProjectIamCustomRolesRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleProjectIamCustomRolesRolesOutputReference <a name="DataGoogleProjectIamCustomRolesRolesOutputReference" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprojectiamcustomroles"

datagoogleprojectiamcustomroles.NewDataGoogleProjectIamCustomRolesRolesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleProjectIamCustomRolesRolesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.deleted">Deleted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.roleId">RoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.stage">Stage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRoles">DataGoogleProjectIamCustomRolesRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Deleted`<sup>Required</sup> <a name="Deleted" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.deleted"></a>

```go
func Deleted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.roleId"></a>

```go
func RoleId() *string
```

- *Type:* *string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.stage"></a>

```go
func Stage() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleProjectIamCustomRolesRoles
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRoles">DataGoogleProjectIamCustomRolesRoles</a>

---



