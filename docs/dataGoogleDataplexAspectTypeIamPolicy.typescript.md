# `dataGoogleDataplexAspectTypeIamPolicy` Submodule <a name="`dataGoogleDataplexAspectTypeIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDataplexAspectTypeIamPolicy <a name="DataGoogleDataplexAspectTypeIamPolicy" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/data-sources/dataplex_aspect_type_iam_policy google_dataplex_aspect_type_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.Initializer"></a>

```typescript
import { dataGoogleDataplexAspectTypeIamPolicy } from '@cdktf/provider-google'

new dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy(scope: Construct, id: string, config: DataGoogleDataplexAspectTypeIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig">DataGoogleDataplexAspectTypeIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig">DataGoogleDataplexAspectTypeIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleDataplexAspectTypeIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.isConstruct"></a>

```typescript
import { dataGoogleDataplexAspectTypeIamPolicy } from '@cdktf/provider-google'

dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleDataplexAspectTypeIamPolicy } from '@cdktf/provider-google'

dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleDataplexAspectTypeIamPolicy } from '@cdktf/provider-google'

dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleDataplexAspectTypeIamPolicy } from '@cdktf/provider-google'

dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleDataplexAspectTypeIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleDataplexAspectTypeIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleDataplexAspectTypeIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/data-sources/dataplex_aspect_type_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleDataplexAspectTypeIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.aspectTypeIdInput">aspectTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.aspectTypeId">aspectTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `aspectTypeIdInput`<sup>Optional</sup> <a name="aspectTypeIdInput" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.aspectTypeIdInput"></a>

```typescript
public readonly aspectTypeIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `aspectTypeId`<sup>Required</sup> <a name="aspectTypeId" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.aspectTypeId"></a>

```typescript
public readonly aspectTypeId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDataplexAspectTypeIamPolicyConfig <a name="DataGoogleDataplexAspectTypeIamPolicyConfig" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleDataplexAspectTypeIamPolicy } from '@cdktf/provider-google'

const dataGoogleDataplexAspectTypeIamPolicyConfig: dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.aspectTypeId">aspectTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/data-sources/dataplex_aspect_type_iam_policy#aspect_type_id DataGoogleDataplexAspectTypeIamPolicy#aspect_type_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/data-sources/dataplex_aspect_type_iam_policy#id DataGoogleDataplexAspectTypeIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/data-sources/dataplex_aspect_type_iam_policy#location DataGoogleDataplexAspectTypeIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/data-sources/dataplex_aspect_type_iam_policy#project DataGoogleDataplexAspectTypeIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aspectTypeId`<sup>Required</sup> <a name="aspectTypeId" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.aspectTypeId"></a>

```typescript
public readonly aspectTypeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/data-sources/dataplex_aspect_type_iam_policy#aspect_type_id DataGoogleDataplexAspectTypeIamPolicy#aspect_type_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/data-sources/dataplex_aspect_type_iam_policy#id DataGoogleDataplexAspectTypeIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/data-sources/dataplex_aspect_type_iam_policy#location DataGoogleDataplexAspectTypeIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/data-sources/dataplex_aspect_type_iam_policy#project DataGoogleDataplexAspectTypeIamPolicy#project}.

---



