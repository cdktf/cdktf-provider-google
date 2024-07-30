# `documentAiProcessorDefaultVersion` Submodule <a name="`documentAiProcessorDefaultVersion` Submodule" id="@cdktf/provider-google.documentAiProcessorDefaultVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocumentAiProcessorDefaultVersion <a name="DocumentAiProcessorDefaultVersion" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/document_ai_processor_default_version google_document_ai_processor_default_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer"></a>

```typescript
import { documentAiProcessorDefaultVersion } from '@cdktf/provider-google'

new documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion(scope: Construct, id: string, config: DocumentAiProcessorDefaultVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig">DocumentAiProcessorDefaultVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig">DocumentAiProcessorDefaultVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.putTimeouts"></a>

```typescript
public putTimeouts(value: DocumentAiProcessorDefaultVersionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts">DocumentAiProcessorDefaultVersionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DocumentAiProcessorDefaultVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isConstruct"></a>

```typescript
import { documentAiProcessorDefaultVersion } from '@cdktf/provider-google'

documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isTerraformElement"></a>

```typescript
import { documentAiProcessorDefaultVersion } from '@cdktf/provider-google'

documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isTerraformResource"></a>

```typescript
import { documentAiProcessorDefaultVersion } from '@cdktf/provider-google'

documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.generateConfigForImport"></a>

```typescript
import { documentAiProcessorDefaultVersion } from '@cdktf/provider-google'

documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DocumentAiProcessorDefaultVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DocumentAiProcessorDefaultVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DocumentAiProcessorDefaultVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/document_ai_processor_default_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DocumentAiProcessorDefaultVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference">DocumentAiProcessorDefaultVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.processorInput">processorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts">DocumentAiProcessorDefaultVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.processor">processor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.timeouts"></a>

```typescript
public readonly timeouts: DocumentAiProcessorDefaultVersionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference">DocumentAiProcessorDefaultVersionTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `processorInput`<sup>Optional</sup> <a name="processorInput" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.processorInput"></a>

```typescript
public readonly processorInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DocumentAiProcessorDefaultVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts">DocumentAiProcessorDefaultVersionTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `processor`<sup>Required</sup> <a name="processor" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.processor"></a>

```typescript
public readonly processor: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DocumentAiProcessorDefaultVersionConfig <a name="DocumentAiProcessorDefaultVersionConfig" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.Initializer"></a>

```typescript
import { documentAiProcessorDefaultVersion } from '@cdktf/provider-google'

const documentAiProcessorDefaultVersionConfig: documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.processor">processor</a></code> | <code>string</code> | The processor to set the version on. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.version">version</a></code> | <code>string</code> | The version to set. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/document_ai_processor_default_version#id DocumentAiProcessorDefaultVersion#id}. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts">DocumentAiProcessorDefaultVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `processor`<sup>Required</sup> <a name="processor" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.processor"></a>

```typescript
public readonly processor: string;
```

- *Type:* string

The processor to set the version on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/document_ai_processor_default_version#processor DocumentAiProcessorDefaultVersion#processor}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version to set.

Using 'stable' or 'rc' will cause the API to return the latest version in that release channel.
Apply 'lifecycle.ignore_changes' to the 'version' field to suppress this diff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/document_ai_processor_default_version#version DocumentAiProcessorDefaultVersion#version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/document_ai_processor_default_version#id DocumentAiProcessorDefaultVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DocumentAiProcessorDefaultVersionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts">DocumentAiProcessorDefaultVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/document_ai_processor_default_version#timeouts DocumentAiProcessorDefaultVersion#timeouts}

---

### DocumentAiProcessorDefaultVersionTimeouts <a name="DocumentAiProcessorDefaultVersionTimeouts" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts.Initializer"></a>

```typescript
import { documentAiProcessorDefaultVersion } from '@cdktf/provider-google'

const documentAiProcessorDefaultVersionTimeouts: documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/document_ai_processor_default_version#create DocumentAiProcessorDefaultVersion#create}. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/document_ai_processor_default_version#delete DocumentAiProcessorDefaultVersion#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/document_ai_processor_default_version#create DocumentAiProcessorDefaultVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/document_ai_processor_default_version#delete DocumentAiProcessorDefaultVersion#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DocumentAiProcessorDefaultVersionTimeoutsOutputReference <a name="DocumentAiProcessorDefaultVersionTimeoutsOutputReference" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer"></a>

```typescript
import { documentAiProcessorDefaultVersion } from '@cdktf/provider-google'

new documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts">DocumentAiProcessorDefaultVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DocumentAiProcessorDefaultVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts">DocumentAiProcessorDefaultVersionTimeouts</a>

---



