# `dataGoogleParameterManagerParameters` Submodule <a name="`dataGoogleParameterManagerParameters` Submodule" id="@cdktf/provider-google.dataGoogleParameterManagerParameters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleParameterManagerParameters <a name="DataGoogleParameterManagerParameters" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/parameter_manager_parameters google_parameter_manager_parameters}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.Initializer"></a>

```typescript
import { dataGoogleParameterManagerParameters } from '@cdktf/provider-google'

new dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters(scope: Construct, id: string, config?: DataGoogleParameterManagerParametersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig">DataGoogleParameterManagerParametersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig">DataGoogleParameterManagerParametersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleParameterManagerParameters resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.isConstruct"></a>

```typescript
import { dataGoogleParameterManagerParameters } from '@cdktf/provider-google'

dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.isTerraformElement"></a>

```typescript
import { dataGoogleParameterManagerParameters } from '@cdktf/provider-google'

dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.isTerraformDataSource"></a>

```typescript
import { dataGoogleParameterManagerParameters } from '@cdktf/provider-google'

dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.generateConfigForImport"></a>

```typescript
import { dataGoogleParameterManagerParameters } from '@cdktf/provider-google'

dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleParameterManagerParameters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleParameterManagerParameters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleParameterManagerParameters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/parameter_manager_parameters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleParameterManagerParameters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList">DataGoogleParameterManagerParametersParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.parameters"></a>

```typescript
public readonly parameters: DataGoogleParameterManagerParametersParametersList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList">DataGoogleParameterManagerParametersParametersList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParameters.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleParameterManagerParametersConfig <a name="DataGoogleParameterManagerParametersConfig" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig.Initializer"></a>

```typescript
import { dataGoogleParameterManagerParameters } from '@cdktf/provider-google'

const dataGoogleParameterManagerParametersConfig: dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig.property.filter">filter</a></code> | <code>string</code> | Filter string, adhering to the rules in List-operation filtering. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/parameter_manager_parameters#id DataGoogleParameterManagerParameters#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/parameter_manager_parameters#project DataGoogleParameterManagerParameters#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Filter string, adhering to the rules in List-operation filtering.

List only parameters matching the filter. 
If filter is empty, all parameters are listed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/parameter_manager_parameters#filter DataGoogleParameterManagerParameters#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/parameter_manager_parameters#id DataGoogleParameterManagerParameters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/parameter_manager_parameters#project DataGoogleParameterManagerParameters#project}.

---

### DataGoogleParameterManagerParametersParameters <a name="DataGoogleParameterManagerParametersParameters" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParameters.Initializer"></a>

```typescript
import { dataGoogleParameterManagerParameters } from '@cdktf/provider-google'

const dataGoogleParameterManagerParametersParameters: dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParameters = { ... }
```


### DataGoogleParameterManagerParametersParametersPolicyMember <a name="DataGoogleParameterManagerParametersParametersPolicyMember" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMember"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMember.Initializer"></a>

```typescript
import { dataGoogleParameterManagerParameters } from '@cdktf/provider-google'

const dataGoogleParameterManagerParametersParametersPolicyMember: dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMember = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleParameterManagerParametersParametersList <a name="DataGoogleParameterManagerParametersParametersList" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.Initializer"></a>

```typescript
import { dataGoogleParameterManagerParameters } from '@cdktf/provider-google'

new dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.get"></a>

```typescript
public get(index: number): DataGoogleParameterManagerParametersParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleParameterManagerParametersParametersOutputReference <a name="DataGoogleParameterManagerParametersParametersOutputReference" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.Initializer"></a>

```typescript
import { dataGoogleParameterManagerParameters } from '@cdktf/provider-google'

new dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.parameterId">parameterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.policyMember">policyMember</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList">DataGoogleParameterManagerParametersParametersPolicyMemberList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParameters">DataGoogleParameterManagerParametersParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameterId`<sup>Required</sup> <a name="parameterId" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.parameterId"></a>

```typescript
public readonly parameterId: string;
```

- *Type:* string

---

##### `policyMember`<sup>Required</sup> <a name="policyMember" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.policyMember"></a>

```typescript
public readonly policyMember: DataGoogleParameterManagerParametersParametersPolicyMemberList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList">DataGoogleParameterManagerParametersParametersPolicyMemberList</a>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleParameterManagerParametersParameters;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParameters">DataGoogleParameterManagerParametersParameters</a>

---


### DataGoogleParameterManagerParametersParametersPolicyMemberList <a name="DataGoogleParameterManagerParametersParametersPolicyMemberList" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.Initializer"></a>

```typescript
import { dataGoogleParameterManagerParameters } from '@cdktf/provider-google'

new dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.get"></a>

```typescript
public get(index: number): DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference <a name="DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.Initializer"></a>

```typescript
import { dataGoogleParameterManagerParameters } from '@cdktf/provider-google'

new dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.property.iamPolicyNamePrincipal">iamPolicyNamePrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.property.iamPolicyUidPrincipal">iamPolicyUidPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMember">DataGoogleParameterManagerParametersParametersPolicyMember</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iamPolicyNamePrincipal`<sup>Required</sup> <a name="iamPolicyNamePrincipal" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.property.iamPolicyNamePrincipal"></a>

```typescript
public readonly iamPolicyNamePrincipal: string;
```

- *Type:* string

---

##### `iamPolicyUidPrincipal`<sup>Required</sup> <a name="iamPolicyUidPrincipal" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.property.iamPolicyUidPrincipal"></a>

```typescript
public readonly iamPolicyUidPrincipal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMemberOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleParameterManagerParametersParametersPolicyMember;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleParameterManagerParameters.DataGoogleParameterManagerParametersParametersPolicyMember">DataGoogleParameterManagerParametersParametersPolicyMember</a>

---



