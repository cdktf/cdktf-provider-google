# `dataGoogleNotebooksRuntimeIamPolicy` Submodule <a name="`dataGoogleNotebooksRuntimeIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleNotebooksRuntimeIamPolicy <a name="DataGoogleNotebooksRuntimeIamPolicy" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/data-sources/notebooks_runtime_iam_policy google_notebooks_runtime_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.Initializer"></a>

```typescript
import { dataGoogleNotebooksRuntimeIamPolicy } from '@cdktf/provider-google'

new dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy(scope: Construct, id: string, config: DataGoogleNotebooksRuntimeIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig">DataGoogleNotebooksRuntimeIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig">DataGoogleNotebooksRuntimeIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleNotebooksRuntimeIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.isConstruct"></a>

```typescript
import { dataGoogleNotebooksRuntimeIamPolicy } from '@cdktf/provider-google'

dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleNotebooksRuntimeIamPolicy } from '@cdktf/provider-google'

dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleNotebooksRuntimeIamPolicy } from '@cdktf/provider-google'

dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleNotebooksRuntimeIamPolicy } from '@cdktf/provider-google'

dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleNotebooksRuntimeIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleNotebooksRuntimeIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleNotebooksRuntimeIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/data-sources/notebooks_runtime_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleNotebooksRuntimeIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.runtimeNameInput">runtimeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.runtimeName">runtimeName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `runtimeNameInput`<sup>Optional</sup> <a name="runtimeNameInput" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.runtimeNameInput"></a>

```typescript
public readonly runtimeNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `runtimeName`<sup>Required</sup> <a name="runtimeName" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.runtimeName"></a>

```typescript
public readonly runtimeName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleNotebooksRuntimeIamPolicyConfig <a name="DataGoogleNotebooksRuntimeIamPolicyConfig" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleNotebooksRuntimeIamPolicy } from '@cdktf/provider-google'

const dataGoogleNotebooksRuntimeIamPolicyConfig: dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig.property.runtimeName">runtimeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/data-sources/notebooks_runtime_iam_policy#runtime_name DataGoogleNotebooksRuntimeIamPolicy#runtime_name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/data-sources/notebooks_runtime_iam_policy#id DataGoogleNotebooksRuntimeIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/data-sources/notebooks_runtime_iam_policy#location DataGoogleNotebooksRuntimeIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/data-sources/notebooks_runtime_iam_policy#project DataGoogleNotebooksRuntimeIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `runtimeName`<sup>Required</sup> <a name="runtimeName" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig.property.runtimeName"></a>

```typescript
public readonly runtimeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/data-sources/notebooks_runtime_iam_policy#runtime_name DataGoogleNotebooksRuntimeIamPolicy#runtime_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/data-sources/notebooks_runtime_iam_policy#id DataGoogleNotebooksRuntimeIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/data-sources/notebooks_runtime_iam_policy#location DataGoogleNotebooksRuntimeIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleNotebooksRuntimeIamPolicy.DataGoogleNotebooksRuntimeIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/data-sources/notebooks_runtime_iam_policy#project DataGoogleNotebooksRuntimeIamPolicy#project}.

---



