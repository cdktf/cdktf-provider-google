# `dataGoogleFolderOrganizationPolicy` Submodule <a name="`dataGoogleFolderOrganizationPolicy` Submodule" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleFolderOrganizationPolicy <a name="DataGoogleFolderOrganizationPolicy" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/data-sources/folder_organization_policy google_folder_organization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.Initializer"></a>

```typescript
import { dataGoogleFolderOrganizationPolicy } from '@cdktf/provider-google'

new dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy(scope: Construct, id: string, config: DataGoogleFolderOrganizationPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig">DataGoogleFolderOrganizationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig">DataGoogleFolderOrganizationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleFolderOrganizationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.isConstruct"></a>

```typescript
import { dataGoogleFolderOrganizationPolicy } from '@cdktf/provider-google'

dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleFolderOrganizationPolicy } from '@cdktf/provider-google'

dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleFolderOrganizationPolicy } from '@cdktf/provider-google'

dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleFolderOrganizationPolicy } from '@cdktf/provider-google'

dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleFolderOrganizationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleFolderOrganizationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleFolderOrganizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/data-sources/folder_organization_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleFolderOrganizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.booleanPolicy">booleanPolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList">DataGoogleFolderOrganizationPolicyBooleanPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.listPolicy">listPolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList">DataGoogleFolderOrganizationPolicyListPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.restorePolicy">restorePolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList">DataGoogleFolderOrganizationPolicyRestorePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.constraintInput">constraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.constraint">constraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `booleanPolicy`<sup>Required</sup> <a name="booleanPolicy" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.booleanPolicy"></a>

```typescript
public readonly booleanPolicy: DataGoogleFolderOrganizationPolicyBooleanPolicyList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList">DataGoogleFolderOrganizationPolicyBooleanPolicyList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `listPolicy`<sup>Required</sup> <a name="listPolicy" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.listPolicy"></a>

```typescript
public readonly listPolicy: DataGoogleFolderOrganizationPolicyListPolicyList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList">DataGoogleFolderOrganizationPolicyListPolicyList</a>

---

##### `restorePolicy`<sup>Required</sup> <a name="restorePolicy" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.restorePolicy"></a>

```typescript
public readonly restorePolicy: DataGoogleFolderOrganizationPolicyRestorePolicyList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList">DataGoogleFolderOrganizationPolicyRestorePolicyList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `constraintInput`<sup>Optional</sup> <a name="constraintInput" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.constraintInput"></a>

```typescript
public readonly constraintInput: string;
```

- *Type:* string

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleFolderOrganizationPolicyBooleanPolicy <a name="DataGoogleFolderOrganizationPolicyBooleanPolicy" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicy.Initializer"></a>

```typescript
import { dataGoogleFolderOrganizationPolicy } from '@cdktf/provider-google'

const dataGoogleFolderOrganizationPolicyBooleanPolicy: dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicy = { ... }
```


### DataGoogleFolderOrganizationPolicyConfig <a name="DataGoogleFolderOrganizationPolicyConfig" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleFolderOrganizationPolicy } from '@cdktf/provider-google'

const dataGoogleFolderOrganizationPolicyConfig: dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig.property.constraint">constraint</a></code> | <code>string</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig.property.folder">folder</a></code> | <code>string</code> | The resource name of the folder to set the policy for. Its format is folders/{folder_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/data-sources/folder_organization_policy#id DataGoogleFolderOrganizationPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/data-sources/folder_organization_policy#constraint DataGoogleFolderOrganizationPolicy#constraint}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

The resource name of the folder to set the policy for. Its format is folders/{folder_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/data-sources/folder_organization_policy#folder DataGoogleFolderOrganizationPolicy#folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/data-sources/folder_organization_policy#id DataGoogleFolderOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleFolderOrganizationPolicyListPolicy <a name="DataGoogleFolderOrganizationPolicyListPolicy" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicy.Initializer"></a>

```typescript
import { dataGoogleFolderOrganizationPolicy } from '@cdktf/provider-google'

const dataGoogleFolderOrganizationPolicyListPolicy: dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicy = { ... }
```


### DataGoogleFolderOrganizationPolicyListPolicyAllow <a name="DataGoogleFolderOrganizationPolicyListPolicyAllow" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllow.Initializer"></a>

```typescript
import { dataGoogleFolderOrganizationPolicy } from '@cdktf/provider-google'

const dataGoogleFolderOrganizationPolicyListPolicyAllow: dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllow = { ... }
```


### DataGoogleFolderOrganizationPolicyListPolicyDeny <a name="DataGoogleFolderOrganizationPolicyListPolicyDeny" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDeny.Initializer"></a>

```typescript
import { dataGoogleFolderOrganizationPolicy } from '@cdktf/provider-google'

const dataGoogleFolderOrganizationPolicyListPolicyDeny: dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDeny = { ... }
```


### DataGoogleFolderOrganizationPolicyRestorePolicy <a name="DataGoogleFolderOrganizationPolicyRestorePolicy" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicy.Initializer"></a>

```typescript
import { dataGoogleFolderOrganizationPolicy } from '@cdktf/provider-google'

const dataGoogleFolderOrganizationPolicyRestorePolicy: dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicy = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleFolderOrganizationPolicyBooleanPolicyList <a name="DataGoogleFolderOrganizationPolicyBooleanPolicyList" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.Initializer"></a>

```typescript
import { dataGoogleFolderOrganizationPolicy } from '@cdktf/provider-google'

new dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.get"></a>

```typescript
public get(index: number): DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference <a name="DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer"></a>

```typescript
import { dataGoogleFolderOrganizationPolicy } from '@cdktf/provider-google'

new dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.enforced">enforced</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicy">DataGoogleFolderOrganizationPolicyBooleanPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.enforced"></a>

```typescript
public readonly enforced: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleFolderOrganizationPolicyBooleanPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyBooleanPolicy">DataGoogleFolderOrganizationPolicyBooleanPolicy</a>

---


### DataGoogleFolderOrganizationPolicyListPolicyAllowList <a name="DataGoogleFolderOrganizationPolicyListPolicyAllowList" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.Initializer"></a>

```typescript
import { dataGoogleFolderOrganizationPolicy } from '@cdktf/provider-google'

new dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.get"></a>

```typescript
public get(index: number): DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference <a name="DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer"></a>

```typescript
import { dataGoogleFolderOrganizationPolicy } from '@cdktf/provider-google'

new dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.all">all</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllow">DataGoogleFolderOrganizationPolicyListPolicyAllow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.all"></a>

```typescript
public readonly all: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleFolderOrganizationPolicyListPolicyAllow;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllow">DataGoogleFolderOrganizationPolicyListPolicyAllow</a>

---


### DataGoogleFolderOrganizationPolicyListPolicyDenyList <a name="DataGoogleFolderOrganizationPolicyListPolicyDenyList" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.Initializer"></a>

```typescript
import { dataGoogleFolderOrganizationPolicy } from '@cdktf/provider-google'

new dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.get"></a>

```typescript
public get(index: number): DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference <a name="DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer"></a>

```typescript
import { dataGoogleFolderOrganizationPolicy } from '@cdktf/provider-google'

new dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.all">all</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDeny">DataGoogleFolderOrganizationPolicyListPolicyDeny</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.all"></a>

```typescript
public readonly all: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleFolderOrganizationPolicyListPolicyDeny;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDeny">DataGoogleFolderOrganizationPolicyListPolicyDeny</a>

---


### DataGoogleFolderOrganizationPolicyListPolicyList <a name="DataGoogleFolderOrganizationPolicyListPolicyList" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.Initializer"></a>

```typescript
import { dataGoogleFolderOrganizationPolicy } from '@cdktf/provider-google'

new dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.get"></a>

```typescript
public get(index: number): DataGoogleFolderOrganizationPolicyListPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleFolderOrganizationPolicyListPolicyOutputReference <a name="DataGoogleFolderOrganizationPolicyListPolicyOutputReference" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer"></a>

```typescript
import { dataGoogleFolderOrganizationPolicy } from '@cdktf/provider-google'

new dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList">DataGoogleFolderOrganizationPolicyListPolicyAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList">DataGoogleFolderOrganizationPolicyListPolicyDenyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParent">inheritFromParent</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.property.suggestedValue">suggestedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicy">DataGoogleFolderOrganizationPolicyListPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.property.allow"></a>

```typescript
public readonly allow: DataGoogleFolderOrganizationPolicyListPolicyAllowList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyAllowList">DataGoogleFolderOrganizationPolicyListPolicyAllowList</a>

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.property.deny"></a>

```typescript
public readonly deny: DataGoogleFolderOrganizationPolicyListPolicyDenyList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyDenyList">DataGoogleFolderOrganizationPolicyListPolicyDenyList</a>

---

##### `inheritFromParent`<sup>Required</sup> <a name="inheritFromParent" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParent"></a>

```typescript
public readonly inheritFromParent: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `suggestedValue`<sup>Required</sup> <a name="suggestedValue" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.property.suggestedValue"></a>

```typescript
public readonly suggestedValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleFolderOrganizationPolicyListPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyListPolicy">DataGoogleFolderOrganizationPolicyListPolicy</a>

---


### DataGoogleFolderOrganizationPolicyRestorePolicyList <a name="DataGoogleFolderOrganizationPolicyRestorePolicyList" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.Initializer"></a>

```typescript
import { dataGoogleFolderOrganizationPolicy } from '@cdktf/provider-google'

new dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.get"></a>

```typescript
public get(index: number): DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference <a name="DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer"></a>

```typescript
import { dataGoogleFolderOrganizationPolicy } from '@cdktf/provider-google'

new dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicy">DataGoogleFolderOrganizationPolicyRestorePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.default"></a>

```typescript
public readonly default: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleFolderOrganizationPolicyRestorePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleFolderOrganizationPolicy.DataGoogleFolderOrganizationPolicyRestorePolicy">DataGoogleFolderOrganizationPolicyRestorePolicy</a>

---



