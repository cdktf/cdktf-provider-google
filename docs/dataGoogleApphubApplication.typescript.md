# `dataGoogleApphubApplication` Submodule <a name="`dataGoogleApphubApplication` Submodule" id="@cdktf/provider-google.dataGoogleApphubApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleApphubApplication <a name="DataGoogleApphubApplication" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/apphub_application google_apphub_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.Initializer"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

new dataGoogleApphubApplication.DataGoogleApphubApplication(scope: Construct, id: string, config: DataGoogleApphubApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig">DataGoogleApphubApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig">DataGoogleApphubApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleApphubApplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.isConstruct"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

dataGoogleApphubApplication.DataGoogleApphubApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.isTerraformElement"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

dataGoogleApphubApplication.DataGoogleApphubApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.isTerraformDataSource"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

dataGoogleApphubApplication.DataGoogleApphubApplication.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.generateConfigForImport"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

dataGoogleApphubApplication.DataGoogleApphubApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleApphubApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleApphubApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleApphubApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/apphub_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleApphubApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList">DataGoogleApphubApplicationAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList">DataGoogleApphubApplicationScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.attributes"></a>

```typescript
public readonly attributes: DataGoogleApphubApplicationAttributesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList">DataGoogleApphubApplicationAttributesList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.scope"></a>

```typescript
public readonly scope: DataGoogleApphubApplicationScopeList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList">DataGoogleApphubApplicationScopeList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleApphubApplicationAttributes <a name="DataGoogleApphubApplicationAttributes" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributes.Initializer"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

const dataGoogleApphubApplicationAttributes: dataGoogleApphubApplication.DataGoogleApphubApplicationAttributes = { ... }
```


### DataGoogleApphubApplicationAttributesBusinessOwners <a name="DataGoogleApphubApplicationAttributesBusinessOwners" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwners.Initializer"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

const dataGoogleApphubApplicationAttributesBusinessOwners: dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwners = { ... }
```


### DataGoogleApphubApplicationAttributesCriticality <a name="DataGoogleApphubApplicationAttributesCriticality" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticality"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticality.Initializer"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

const dataGoogleApphubApplicationAttributesCriticality: dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticality = { ... }
```


### DataGoogleApphubApplicationAttributesDeveloperOwners <a name="DataGoogleApphubApplicationAttributesDeveloperOwners" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwners.Initializer"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

const dataGoogleApphubApplicationAttributesDeveloperOwners: dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwners = { ... }
```


### DataGoogleApphubApplicationAttributesEnvironment <a name="DataGoogleApphubApplicationAttributesEnvironment" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironment.Initializer"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

const dataGoogleApphubApplicationAttributesEnvironment: dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironment = { ... }
```


### DataGoogleApphubApplicationAttributesOperatorOwners <a name="DataGoogleApphubApplicationAttributesOperatorOwners" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwners.Initializer"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

const dataGoogleApphubApplicationAttributesOperatorOwners: dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwners = { ... }
```


### DataGoogleApphubApplicationConfig <a name="DataGoogleApphubApplicationConfig" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.Initializer"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

const dataGoogleApphubApplicationConfig: dataGoogleApphubApplication.DataGoogleApphubApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Required. The Application identifier. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.location">location</a></code> | <code>string</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/apphub_application#project DataGoogleApphubApplication#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/apphub_application#id DataGoogleApphubApplication#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Required. The Application identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/apphub_application#application_id DataGoogleApphubApplication#application_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/apphub_application#location DataGoogleApphubApplication#location}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/apphub_application#project DataGoogleApphubApplication#project}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/apphub_application#id DataGoogleApphubApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleApphubApplicationScope <a name="DataGoogleApphubApplicationScope" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScope.Initializer"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

const dataGoogleApphubApplicationScope: dataGoogleApphubApplication.DataGoogleApphubApplicationScope = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleApphubApplicationAttributesBusinessOwnersList <a name="DataGoogleApphubApplicationAttributesBusinessOwnersList" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.Initializer"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

new dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.get"></a>

```typescript
public get(index: number): DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference <a name="DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

new dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwners">DataGoogleApphubApplicationAttributesBusinessOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleApphubApplicationAttributesBusinessOwners;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwners">DataGoogleApphubApplicationAttributesBusinessOwners</a>

---


### DataGoogleApphubApplicationAttributesCriticalityList <a name="DataGoogleApphubApplicationAttributesCriticalityList" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.Initializer"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

new dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.get"></a>

```typescript
public get(index: number): DataGoogleApphubApplicationAttributesCriticalityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleApphubApplicationAttributesCriticalityOutputReference <a name="DataGoogleApphubApplicationAttributesCriticalityOutputReference" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.Initializer"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

new dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticality">DataGoogleApphubApplicationAttributesCriticality</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleApphubApplicationAttributesCriticality;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticality">DataGoogleApphubApplicationAttributesCriticality</a>

---


### DataGoogleApphubApplicationAttributesDeveloperOwnersList <a name="DataGoogleApphubApplicationAttributesDeveloperOwnersList" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.Initializer"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

new dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.get"></a>

```typescript
public get(index: number): DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference <a name="DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

new dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwners">DataGoogleApphubApplicationAttributesDeveloperOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleApphubApplicationAttributesDeveloperOwners;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwners">DataGoogleApphubApplicationAttributesDeveloperOwners</a>

---


### DataGoogleApphubApplicationAttributesEnvironmentList <a name="DataGoogleApphubApplicationAttributesEnvironmentList" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.Initializer"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

new dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.get"></a>

```typescript
public get(index: number): DataGoogleApphubApplicationAttributesEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleApphubApplicationAttributesEnvironmentOutputReference <a name="DataGoogleApphubApplicationAttributesEnvironmentOutputReference" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

new dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironment">DataGoogleApphubApplicationAttributesEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleApphubApplicationAttributesEnvironment;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironment">DataGoogleApphubApplicationAttributesEnvironment</a>

---


### DataGoogleApphubApplicationAttributesList <a name="DataGoogleApphubApplicationAttributesList" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.Initializer"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

new dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.get"></a>

```typescript
public get(index: number): DataGoogleApphubApplicationAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleApphubApplicationAttributesOperatorOwnersList <a name="DataGoogleApphubApplicationAttributesOperatorOwnersList" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.Initializer"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

new dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.get"></a>

```typescript
public get(index: number): DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference <a name="DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

new dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwners">DataGoogleApphubApplicationAttributesOperatorOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleApphubApplicationAttributesOperatorOwners;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwners">DataGoogleApphubApplicationAttributesOperatorOwners</a>

---


### DataGoogleApphubApplicationAttributesOutputReference <a name="DataGoogleApphubApplicationAttributesOutputReference" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.Initializer"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

new dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.businessOwners">businessOwners</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList">DataGoogleApphubApplicationAttributesBusinessOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.criticality">criticality</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList">DataGoogleApphubApplicationAttributesCriticalityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.developerOwners">developerOwners</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList">DataGoogleApphubApplicationAttributesDeveloperOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList">DataGoogleApphubApplicationAttributesEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.operatorOwners">operatorOwners</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList">DataGoogleApphubApplicationAttributesOperatorOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributes">DataGoogleApphubApplicationAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `businessOwners`<sup>Required</sup> <a name="businessOwners" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.businessOwners"></a>

```typescript
public readonly businessOwners: DataGoogleApphubApplicationAttributesBusinessOwnersList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList">DataGoogleApphubApplicationAttributesBusinessOwnersList</a>

---

##### `criticality`<sup>Required</sup> <a name="criticality" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.criticality"></a>

```typescript
public readonly criticality: DataGoogleApphubApplicationAttributesCriticalityList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList">DataGoogleApphubApplicationAttributesCriticalityList</a>

---

##### `developerOwners`<sup>Required</sup> <a name="developerOwners" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.developerOwners"></a>

```typescript
public readonly developerOwners: DataGoogleApphubApplicationAttributesDeveloperOwnersList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList">DataGoogleApphubApplicationAttributesDeveloperOwnersList</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.environment"></a>

```typescript
public readonly environment: DataGoogleApphubApplicationAttributesEnvironmentList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList">DataGoogleApphubApplicationAttributesEnvironmentList</a>

---

##### `operatorOwners`<sup>Required</sup> <a name="operatorOwners" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.operatorOwners"></a>

```typescript
public readonly operatorOwners: DataGoogleApphubApplicationAttributesOperatorOwnersList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList">DataGoogleApphubApplicationAttributesOperatorOwnersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleApphubApplicationAttributes;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributes">DataGoogleApphubApplicationAttributes</a>

---


### DataGoogleApphubApplicationScopeList <a name="DataGoogleApphubApplicationScopeList" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.Initializer"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

new dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.get"></a>

```typescript
public get(index: number): DataGoogleApphubApplicationScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleApphubApplicationScopeOutputReference <a name="DataGoogleApphubApplicationScopeOutputReference" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.Initializer"></a>

```typescript
import { dataGoogleApphubApplication } from '@cdktf/provider-google'

new dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScope">DataGoogleApphubApplicationScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleApphubApplicationScope;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScope">DataGoogleApphubApplicationScope</a>

---



