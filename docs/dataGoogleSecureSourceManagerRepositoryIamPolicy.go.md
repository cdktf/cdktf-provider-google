# `dataGoogleSecureSourceManagerRepositoryIamPolicy` Submodule <a name="`dataGoogleSecureSourceManagerRepositoryIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSecureSourceManagerRepositoryIamPolicy <a name="DataGoogleSecureSourceManagerRepositoryIamPolicy" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/secure_source_manager_repository_iam_policy google_secure_source_manager_repository_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecuresourcemanagerrepositoryiampolicy"

datagooglesecuresourcemanagerrepositoryiampolicy.NewDataGoogleSecureSourceManagerRepositoryIamPolicy(scope Construct, id *string, config DataGoogleSecureSourceManagerRepositoryIamPolicyConfig) DataGoogleSecureSourceManagerRepositoryIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig">DataGoogleSecureSourceManagerRepositoryIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig">DataGoogleSecureSourceManagerRepositoryIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleSecureSourceManagerRepositoryIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecuresourcemanagerrepositoryiampolicy"

datagooglesecuresourcemanagerrepositoryiampolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecuresourcemanagerrepositoryiampolicy"

datagooglesecuresourcemanagerrepositoryiampolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecuresourcemanagerrepositoryiampolicy"

datagooglesecuresourcemanagerrepositoryiampolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecuresourcemanagerrepositoryiampolicy"

datagooglesecuresourcemanagerrepositoryiampolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleSecureSourceManagerRepositoryIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleSecureSourceManagerRepositoryIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleSecureSourceManagerRepositoryIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/secure_source_manager_repository_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleSecureSourceManagerRepositoryIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.repositoryIdInput"></a>

```go
func RepositoryIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.repositoryId"></a>

```go
func RepositoryId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSecureSourceManagerRepositoryIamPolicyConfig <a name="DataGoogleSecureSourceManagerRepositoryIamPolicyConfig" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecuresourcemanagerrepositoryiampolicy"

&datagooglesecuresourcemanagerrepositoryiampolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	RepositoryId: *string,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/secure_source_manager_repository_iam_policy#repository_id DataGoogleSecureSourceManagerRepositoryIamPolicy#repository_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/secure_source_manager_repository_iam_policy#id DataGoogleSecureSourceManagerRepositoryIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/secure_source_manager_repository_iam_policy#location DataGoogleSecureSourceManagerRepositoryIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/secure_source_manager_repository_iam_policy#project DataGoogleSecureSourceManagerRepositoryIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.repositoryId"></a>

```go
RepositoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/secure_source_manager_repository_iam_policy#repository_id DataGoogleSecureSourceManagerRepositoryIamPolicy#repository_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/secure_source_manager_repository_iam_policy#id DataGoogleSecureSourceManagerRepositoryIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/secure_source_manager_repository_iam_policy#location DataGoogleSecureSourceManagerRepositoryIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/data-sources/secure_source_manager_repository_iam_policy#project DataGoogleSecureSourceManagerRepositoryIamPolicy#project}.

---



