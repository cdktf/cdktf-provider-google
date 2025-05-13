# `containerAnalysisOccurrence` Submodule <a name="`containerAnalysisOccurrence` Submodule" id="@cdktf/provider-google.containerAnalysisOccurrence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAnalysisOccurrence <a name="ContainerAnalysisOccurrence" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/container_analysis_occurrence google_container_analysis_occurrence}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer"></a>

```typescript
import { containerAnalysisOccurrence } from '@cdktf/provider-google'

new containerAnalysisOccurrence.ContainerAnalysisOccurrence(scope: Construct, id: string, config: ContainerAnalysisOccurrenceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig">ContainerAnalysisOccurrenceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig">ContainerAnalysisOccurrenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putAttestation">putAttestation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetRemediation">resetRemediation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttestation` <a name="putAttestation" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putAttestation"></a>

```typescript
public putAttestation(value: ContainerAnalysisOccurrenceAttestation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putAttestation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putTimeouts"></a>

```typescript
public putTimeouts(value: ContainerAnalysisOccurrenceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRemediation` <a name="resetRemediation" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetRemediation"></a>

```typescript
public resetRemediation(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerAnalysisOccurrence resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isConstruct"></a>

```typescript
import { containerAnalysisOccurrence } from '@cdktf/provider-google'

containerAnalysisOccurrence.ContainerAnalysisOccurrence.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformElement"></a>

```typescript
import { containerAnalysisOccurrence } from '@cdktf/provider-google'

containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformResource"></a>

```typescript
import { containerAnalysisOccurrence } from '@cdktf/provider-google'

containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.generateConfigForImport"></a>

```typescript
import { containerAnalysisOccurrence } from '@cdktf/provider-google'

containerAnalysisOccurrence.ContainerAnalysisOccurrence.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ContainerAnalysisOccurrence resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerAnalysisOccurrence to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerAnalysisOccurrence that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/container_analysis_occurrence#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAnalysisOccurrence to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.attestation">attestation</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference">ContainerAnalysisOccurrenceAttestationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference">ContainerAnalysisOccurrenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.attestationInput">attestationInput</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.noteNameInput">noteNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.remediationInput">remediationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.resourceUriInput">resourceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.noteName">noteName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.remediation">remediation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.resourceUri">resourceUri</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.attestation"></a>

```typescript
public readonly attestation: ContainerAnalysisOccurrenceAttestationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference">ContainerAnalysisOccurrenceAttestationOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerAnalysisOccurrenceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference">ContainerAnalysisOccurrenceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `attestationInput`<sup>Optional</sup> <a name="attestationInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.attestationInput"></a>

```typescript
public readonly attestationInput: ContainerAnalysisOccurrenceAttestation;
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `noteNameInput`<sup>Optional</sup> <a name="noteNameInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.noteNameInput"></a>

```typescript
public readonly noteNameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `remediationInput`<sup>Optional</sup> <a name="remediationInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.remediationInput"></a>

```typescript
public readonly remediationInput: string;
```

- *Type:* string

---

##### `resourceUriInput`<sup>Optional</sup> <a name="resourceUriInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.resourceUriInput"></a>

```typescript
public readonly resourceUriInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContainerAnalysisOccurrenceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `noteName`<sup>Required</sup> <a name="noteName" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.noteName"></a>

```typescript
public readonly noteName: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `remediation`<sup>Required</sup> <a name="remediation" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.remediation"></a>

```typescript
public readonly remediation: string;
```

- *Type:* string

---

##### `resourceUri`<sup>Required</sup> <a name="resourceUri" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.resourceUri"></a>

```typescript
public readonly resourceUri: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAnalysisOccurrenceAttestation <a name="ContainerAnalysisOccurrenceAttestation" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation.Initializer"></a>

```typescript
import { containerAnalysisOccurrence } from '@cdktf/provider-google'

const containerAnalysisOccurrenceAttestation: containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation.property.serializedPayload">serializedPayload</a></code> | <code>string</code> | The serialized payload that is verified by one or more signatures. A base64-encoded string. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation.property.signatures">signatures</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>[]</code> | signatures block. |

---

##### `serializedPayload`<sup>Required</sup> <a name="serializedPayload" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation.property.serializedPayload"></a>

```typescript
public readonly serializedPayload: string;
```

- *Type:* string

The serialized payload that is verified by one or more signatures. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/container_analysis_occurrence#serialized_payload ContainerAnalysisOccurrence#serialized_payload}

---

##### `signatures`<sup>Required</sup> <a name="signatures" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation.property.signatures"></a>

```typescript
public readonly signatures: IResolvable | ContainerAnalysisOccurrenceAttestationSignatures[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>[]

signatures block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/container_analysis_occurrence#signatures ContainerAnalysisOccurrence#signatures}

---

### ContainerAnalysisOccurrenceAttestationSignatures <a name="ContainerAnalysisOccurrenceAttestationSignatures" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures.Initializer"></a>

```typescript
import { containerAnalysisOccurrence } from '@cdktf/provider-google'

const containerAnalysisOccurrenceAttestationSignatures: containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures.property.publicKeyId">publicKeyId</a></code> | <code>string</code> | The identifier for the public key that verifies this signature. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures.property.signature">signature</a></code> | <code>string</code> | The content of the signature, an opaque bytestring. |

---

##### `publicKeyId`<sup>Required</sup> <a name="publicKeyId" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures.property.publicKeyId"></a>

```typescript
public readonly publicKeyId: string;
```

- *Type:* string

The identifier for the public key that verifies this signature.

MUST be an RFC3986 conformant
URI. * When possible, the key id should be an
immutable reference, such as a cryptographic digest.
Examples of valid values:

* OpenPGP V4 public key fingerprint. See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr
  for more details on this scheme.
    * 'openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA'
* RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization):
    * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/container_analysis_occurrence#public_key_id ContainerAnalysisOccurrence#public_key_id}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

The content of the signature, an opaque bytestring.

The payload that this signature verifies MUST be
unambiguously provided with the Signature during
verification. A wrapper message might provide the
payload explicitly. Alternatively, a message might
have a canonical serialization that can always be
unambiguously computed to derive the payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/container_analysis_occurrence#signature ContainerAnalysisOccurrence#signature}

---

### ContainerAnalysisOccurrenceConfig <a name="ContainerAnalysisOccurrenceConfig" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.Initializer"></a>

```typescript
import { containerAnalysisOccurrence } from '@cdktf/provider-google'

const containerAnalysisOccurrenceConfig: containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.attestation">attestation</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a></code> | attestation block. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.noteName">noteName</a></code> | <code>string</code> | The analysis note associated with this occurrence, in the form of projects/[PROJECT]/notes/[NOTE_ID]. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.resourceUri">resourceUri</a></code> | <code>string</code> | Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, https://gcr.io/project/image@sha256:123abc for a Docker image. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/container_analysis_occurrence#id ContainerAnalysisOccurrence#id}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/container_analysis_occurrence#project ContainerAnalysisOccurrence#project}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.remediation">remediation</a></code> | <code>string</code> | A description of actions that can be taken to remedy the note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.attestation"></a>

```typescript
public readonly attestation: ContainerAnalysisOccurrenceAttestation;
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a>

attestation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/container_analysis_occurrence#attestation ContainerAnalysisOccurrence#attestation}

---

##### `noteName`<sup>Required</sup> <a name="noteName" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.noteName"></a>

```typescript
public readonly noteName: string;
```

- *Type:* string

The analysis note associated with this occurrence, in the form of projects/[PROJECT]/notes/[NOTE_ID].

This field can be used as a
filter in list requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/container_analysis_occurrence#note_name ContainerAnalysisOccurrence#note_name}

---

##### `resourceUri`<sup>Required</sup> <a name="resourceUri" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.resourceUri"></a>

```typescript
public readonly resourceUri: string;
```

- *Type:* string

Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, https://gcr.io/project/image@sha256:123abc for a Docker image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/container_analysis_occurrence#resource_uri ContainerAnalysisOccurrence#resource_uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/container_analysis_occurrence#id ContainerAnalysisOccurrence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/container_analysis_occurrence#project ContainerAnalysisOccurrence#project}.

---

##### `remediation`<sup>Optional</sup> <a name="remediation" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.remediation"></a>

```typescript
public readonly remediation: string;
```

- *Type:* string

A description of actions that can be taken to remedy the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/container_analysis_occurrence#remediation ContainerAnalysisOccurrence#remediation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerAnalysisOccurrenceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/container_analysis_occurrence#timeouts ContainerAnalysisOccurrence#timeouts}

---

### ContainerAnalysisOccurrenceTimeouts <a name="ContainerAnalysisOccurrenceTimeouts" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.Initializer"></a>

```typescript
import { containerAnalysisOccurrence } from '@cdktf/provider-google'

const containerAnalysisOccurrenceTimeouts: containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/container_analysis_occurrence#create ContainerAnalysisOccurrence#create}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/container_analysis_occurrence#delete ContainerAnalysisOccurrence#delete}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/container_analysis_occurrence#update ContainerAnalysisOccurrence#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/container_analysis_occurrence#create ContainerAnalysisOccurrence#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/container_analysis_occurrence#delete ContainerAnalysisOccurrence#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/container_analysis_occurrence#update ContainerAnalysisOccurrence#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAnalysisOccurrenceAttestationOutputReference <a name="ContainerAnalysisOccurrenceAttestationOutputReference" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.Initializer"></a>

```typescript
import { containerAnalysisOccurrence } from '@cdktf/provider-google'

new containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.putSignatures">putSignatures</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSignatures` <a name="putSignatures" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.putSignatures"></a>

```typescript
public putSignatures(value: IResolvable | ContainerAnalysisOccurrenceAttestationSignatures[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.putSignatures.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.signatures">signatures</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList">ContainerAnalysisOccurrenceAttestationSignaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayloadInput">serializedPayloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.signaturesInput">signaturesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayload">serializedPayload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `signatures`<sup>Required</sup> <a name="signatures" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.signatures"></a>

```typescript
public readonly signatures: ContainerAnalysisOccurrenceAttestationSignaturesList;
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList">ContainerAnalysisOccurrenceAttestationSignaturesList</a>

---

##### `serializedPayloadInput`<sup>Optional</sup> <a name="serializedPayloadInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayloadInput"></a>

```typescript
public readonly serializedPayloadInput: string;
```

- *Type:* string

---

##### `signaturesInput`<sup>Optional</sup> <a name="signaturesInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.signaturesInput"></a>

```typescript
public readonly signaturesInput: IResolvable | ContainerAnalysisOccurrenceAttestationSignatures[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>[]

---

##### `serializedPayload`<sup>Required</sup> <a name="serializedPayload" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayload"></a>

```typescript
public readonly serializedPayload: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAnalysisOccurrenceAttestation;
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a>

---


### ContainerAnalysisOccurrenceAttestationSignaturesList <a name="ContainerAnalysisOccurrenceAttestationSignaturesList" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer"></a>

```typescript
import { containerAnalysisOccurrence } from '@cdktf/provider-google'

new containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.get"></a>

```typescript
public get(index: number): ContainerAnalysisOccurrenceAttestationSignaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAnalysisOccurrenceAttestationSignatures[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>[]

---


### ContainerAnalysisOccurrenceAttestationSignaturesOutputReference <a name="ContainerAnalysisOccurrenceAttestationSignaturesOutputReference" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer"></a>

```typescript
import { containerAnalysisOccurrence } from '@cdktf/provider-google'

new containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resetSignature">resetSignature</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSignature` <a name="resetSignature" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resetSignature"></a>

```typescript
public resetSignature(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyIdInput">publicKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signatureInput">signatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyId">publicKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publicKeyIdInput`<sup>Optional</sup> <a name="publicKeyIdInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyIdInput"></a>

```typescript
public readonly publicKeyIdInput: string;
```

- *Type:* string

---

##### `signatureInput`<sup>Optional</sup> <a name="signatureInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signatureInput"></a>

```typescript
public readonly signatureInput: string;
```

- *Type:* string

---

##### `publicKeyId`<sup>Required</sup> <a name="publicKeyId" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyId"></a>

```typescript
public readonly publicKeyId: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAnalysisOccurrenceAttestationSignatures;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>

---


### ContainerAnalysisOccurrenceTimeoutsOutputReference <a name="ContainerAnalysisOccurrenceTimeoutsOutputReference" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer"></a>

```typescript
import { containerAnalysisOccurrence } from '@cdktf/provider-google'

new containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAnalysisOccurrenceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a>

---



