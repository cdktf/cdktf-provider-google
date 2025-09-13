# `dataGoogleOrganizationIamCustomRoles` Submodule <a name="`dataGoogleOrganizationIamCustomRoles` Submodule" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOrganizationIamCustomRoles <a name="DataGoogleOrganizationIamCustomRoles" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/organization_iam_custom_roles google_organization_iam_custom_roles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleorganizationiamcustomroles"

datagoogleorganizationiamcustomroles.NewDataGoogleOrganizationIamCustomRoles(scope Construct, id *string, config DataGoogleOrganizationIamCustomRolesConfig) DataGoogleOrganizationIamCustomRoles
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig">DataGoogleOrganizationIamCustomRolesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig">DataGoogleOrganizationIamCustomRolesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetOrgId">ResetOrgId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetShowDeleted">ResetShowDeleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetView">ResetView</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetId"></a>

```go
func ResetId()
```

##### `ResetOrgId` <a name="ResetOrgId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetOrgId"></a>

```go
func ResetOrgId()
```

##### `ResetShowDeleted` <a name="ResetShowDeleted" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetShowDeleted"></a>

```go
func ResetShowDeleted()
```

##### `ResetView` <a name="ResetView" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetView"></a>

```go
func ResetView()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleOrganizationIamCustomRoles resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleorganizationiamcustomroles"

datagoogleorganizationiamcustomroles.DataGoogleOrganizationIamCustomRoles_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleorganizationiamcustomroles"

datagoogleorganizationiamcustomroles.DataGoogleOrganizationIamCustomRoles_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleorganizationiamcustomroles"

datagoogleorganizationiamcustomroles.DataGoogleOrganizationIamCustomRoles_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleorganizationiamcustomroles"

datagoogleorganizationiamcustomroles.DataGoogleOrganizationIamCustomRoles_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleOrganizationIamCustomRoles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleOrganizationIamCustomRoles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleOrganizationIamCustomRoles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/organization_iam_custom_roles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleOrganizationIamCustomRoles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.roles">Roles</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList">DataGoogleOrganizationIamCustomRolesRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.showDeletedInput">ShowDeletedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.viewInput">ViewInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.showDeleted">ShowDeleted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.view">View</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.roles"></a>

```go
func Roles() DataGoogleOrganizationIamCustomRolesRolesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList">DataGoogleOrganizationIamCustomRolesRolesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `ShowDeletedInput`<sup>Optional</sup> <a name="ShowDeletedInput" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.showDeletedInput"></a>

```go
func ShowDeletedInput() interface{}
```

- *Type:* interface{}

---

##### `ViewInput`<sup>Optional</sup> <a name="ViewInput" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.viewInput"></a>

```go
func ViewInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `ShowDeleted`<sup>Required</sup> <a name="ShowDeleted" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.showDeleted"></a>

```go
func ShowDeleted() interface{}
```

- *Type:* interface{}

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.view"></a>

```go
func View() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOrganizationIamCustomRolesConfig <a name="DataGoogleOrganizationIamCustomRolesConfig" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleorganizationiamcustomroles"

&datagoogleorganizationiamcustomroles.DataGoogleOrganizationIamCustomRolesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	OrgId: *string,
	ShowDeleted: interface{},
	View: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/organization_iam_custom_roles#id DataGoogleOrganizationIamCustomRoles#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.orgId">OrgId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/organization_iam_custom_roles#org_id DataGoogleOrganizationIamCustomRoles#org_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.showDeleted">ShowDeleted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/organization_iam_custom_roles#show_deleted DataGoogleOrganizationIamCustomRoles#show_deleted}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.view">View</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/organization_iam_custom_roles#view DataGoogleOrganizationIamCustomRoles#view}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/organization_iam_custom_roles#id DataGoogleOrganizationIamCustomRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OrgId`<sup>Optional</sup> <a name="OrgId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/organization_iam_custom_roles#org_id DataGoogleOrganizationIamCustomRoles#org_id}.

---

##### `ShowDeleted`<sup>Optional</sup> <a name="ShowDeleted" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.showDeleted"></a>

```go
ShowDeleted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/organization_iam_custom_roles#show_deleted DataGoogleOrganizationIamCustomRoles#show_deleted}.

---

##### `View`<sup>Optional</sup> <a name="View" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.view"></a>

```go
View *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/organization_iam_custom_roles#view DataGoogleOrganizationIamCustomRoles#view}.

---

### DataGoogleOrganizationIamCustomRolesRoles <a name="DataGoogleOrganizationIamCustomRolesRoles" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRoles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleorganizationiamcustomroles"

&datagoogleorganizationiamcustomroles.DataGoogleOrganizationIamCustomRolesRoles {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOrganizationIamCustomRolesRolesList <a name="DataGoogleOrganizationIamCustomRolesRolesList" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleorganizationiamcustomroles"

datagoogleorganizationiamcustomroles.NewDataGoogleOrganizationIamCustomRolesRolesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOrganizationIamCustomRolesRolesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.get"></a>

```go
func Get(index *f64) DataGoogleOrganizationIamCustomRolesRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOrganizationIamCustomRolesRolesOutputReference <a name="DataGoogleOrganizationIamCustomRolesRolesOutputReference" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleorganizationiamcustomroles"

datagoogleorganizationiamcustomroles.NewDataGoogleOrganizationIamCustomRolesRolesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOrganizationIamCustomRolesRolesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.deleted">Deleted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.roleId">RoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.stage">Stage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRoles">DataGoogleOrganizationIamCustomRolesRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Deleted`<sup>Required</sup> <a name="Deleted" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.deleted"></a>

```go
func Deleted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.roleId"></a>

```go
func RoleId() *string
```

- *Type:* *string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.stage"></a>

```go
func Stage() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOrganizationIamCustomRolesRoles
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRoles">DataGoogleOrganizationIamCustomRolesRoles</a>

---



