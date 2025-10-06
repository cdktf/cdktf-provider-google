# `networkServicesAuthzExtension` Submodule <a name="`networkServicesAuthzExtension` Submodule" id="@cdktf/provider-google.networkServicesAuthzExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesAuthzExtension <a name="NetworkServicesAuthzExtension" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension google_network_services_authz_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer"></a>

```typescript
import { networkServicesAuthzExtension } from '@cdktf/provider-google'

new networkServicesAuthzExtension.NetworkServicesAuthzExtension(scope: Construct, id: string, config: NetworkServicesAuthzExtensionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig">NetworkServicesAuthzExtensionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig">NetworkServicesAuthzExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetFailOpen">resetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetForwardHeaders">resetForwardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetWireFormat">resetWireFormat</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkServicesAuthzExtensionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts">NetworkServicesAuthzExtensionTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetFailOpen"></a>

```typescript
public resetFailOpen(): void
```

##### `resetForwardHeaders` <a name="resetForwardHeaders" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetForwardHeaders"></a>

```typescript
public resetForwardHeaders(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWireFormat` <a name="resetWireFormat" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetWireFormat"></a>

```typescript
public resetWireFormat(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkServicesAuthzExtension resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.isConstruct"></a>

```typescript
import { networkServicesAuthzExtension } from '@cdktf/provider-google'

networkServicesAuthzExtension.NetworkServicesAuthzExtension.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.isTerraformElement"></a>

```typescript
import { networkServicesAuthzExtension } from '@cdktf/provider-google'

networkServicesAuthzExtension.NetworkServicesAuthzExtension.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.isTerraformResource"></a>

```typescript
import { networkServicesAuthzExtension } from '@cdktf/provider-google'

networkServicesAuthzExtension.NetworkServicesAuthzExtension.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.generateConfigForImport"></a>

```typescript
import { networkServicesAuthzExtension } from '@cdktf/provider-google'

networkServicesAuthzExtension.NetworkServicesAuthzExtension.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkServicesAuthzExtension resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkServicesAuthzExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkServicesAuthzExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesAuthzExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference">NetworkServicesAuthzExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.authorityInput">authorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.failOpenInput">failOpenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.forwardHeadersInput">forwardHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.loadBalancingSchemeInput">loadBalancingSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts">NetworkServicesAuthzExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.wireFormatInput">wireFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.authority">authority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.failOpen">failOpen</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.forwardHeaders">forwardHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.wireFormat">wireFormat</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesAuthzExtensionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference">NetworkServicesAuthzExtensionTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `authorityInput`<sup>Optional</sup> <a name="authorityInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.authorityInput"></a>

```typescript
public readonly authorityInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.failOpenInput"></a>

```typescript
public readonly failOpenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forwardHeadersInput`<sup>Optional</sup> <a name="forwardHeadersInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.forwardHeadersInput"></a>

```typescript
public readonly forwardHeadersInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `loadBalancingSchemeInput`<sup>Optional</sup> <a name="loadBalancingSchemeInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.loadBalancingSchemeInput"></a>

```typescript
public readonly loadBalancingSchemeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkServicesAuthzExtensionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts">NetworkServicesAuthzExtensionTimeouts</a>

---

##### `wireFormatInput`<sup>Optional</sup> <a name="wireFormatInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.wireFormatInput"></a>

```typescript
public readonly wireFormatInput: string;
```

- *Type:* string

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.authority"></a>

```typescript
public readonly authority: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forwardHeaders`<sup>Required</sup> <a name="forwardHeaders" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.forwardHeaders"></a>

```typescript
public readonly forwardHeaders: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.loadBalancingScheme"></a>

```typescript
public readonly loadBalancingScheme: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `wireFormat`<sup>Required</sup> <a name="wireFormat" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.wireFormat"></a>

```typescript
public readonly wireFormat: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesAuthzExtensionConfig <a name="NetworkServicesAuthzExtensionConfig" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.Initializer"></a>

```typescript
import { networkServicesAuthzExtension } from '@cdktf/provider-google'

const networkServicesAuthzExtensionConfig: networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.authority">authority</a></code> | <code>string</code> | The :authority header in the gRPC request sent from Envoy to the extension service. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>string</code> | All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.name">name</a></code> | <code>string</code> | Identifier. Name of the AuthzExtension resource. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.service">service</a></code> | <code>string</code> | The reference to the service that runs the extension. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.timeout">timeout</a></code> | <code>string</code> | Specifies the timeout for each individual message on the stream. The timeout must be between 10-10000 milliseconds. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.description">description</a></code> | <code>string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.failOpen">failOpen</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.forwardHeaders">forwardHeaders</a></code> | <code>string[]</code> | List of the HTTP headers to forward to the extension (from the client). |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#id NetworkServicesAuthzExtension#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of labels associated with the AuthzExtension resource. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | The metadata provided here is included as part of the metadata_context (of type google.protobuf.Struct) in the ProcessingRequest message sent to the extension server. The metadata is available under the namespace com.google.authz_extension.<resourceName>. The following variables are supported in the metadata Struct:. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#project NetworkServicesAuthzExtension#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts">NetworkServicesAuthzExtensionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.wireFormat">wireFormat</a></code> | <code>string</code> | The format of communication supported by the callout extension. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.authority"></a>

```typescript
public readonly authority: string;
```

- *Type:* string

The :authority header in the gRPC request sent from Envoy to the extension service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#authority NetworkServicesAuthzExtension#authority}

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.loadBalancingScheme"></a>

```typescript
public readonly loadBalancingScheme: string;
```

- *Type:* string

All backend services and forwarding rules referenced by this extension must share the same load balancing scheme.

For more information, refer to [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#load_balancing_scheme NetworkServicesAuthzExtension#load_balancing_scheme}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#location NetworkServicesAuthzExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Identifier. Name of the AuthzExtension resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#name NetworkServicesAuthzExtension#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The reference to the service that runs the extension.

To configure a callout extension, service must be a fully-qualified reference to a [backend service](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices) in the format:
https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/backendServices/{backendService} or https://www.googleapis.com/compute/v1/projects/{project}/global/backendServices/{backendService}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#service NetworkServicesAuthzExtension#service}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

Specifies the timeout for each individual message on the stream. The timeout must be between 10-10000 milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#timeout NetworkServicesAuthzExtension#timeout}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#description NetworkServicesAuthzExtension#description}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines how the proxy behaves if the call to the extension fails or times out.

When set to TRUE, request or response processing continues without error. Any subsequent extensions in the extension chain are also executed. When set to FALSE or the default setting of FALSE is used, one of the following happens:
* If response headers have not been delivered to the downstream client, a generic 500 error is returned to the client. The error response can be tailored by configuring a custom error response in the load balancer.
* If response headers have been delivered, then the HTTP stream to the downstream client is reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#fail_open NetworkServicesAuthzExtension#fail_open}

---

##### `forwardHeaders`<sup>Optional</sup> <a name="forwardHeaders" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.forwardHeaders"></a>

```typescript
public readonly forwardHeaders: string[];
```

- *Type:* string[]

List of the HTTP headers to forward to the extension (from the client).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#forward_headers NetworkServicesAuthzExtension#forward_headers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#id NetworkServicesAuthzExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of labels associated with the AuthzExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#labels NetworkServicesAuthzExtension#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The metadata provided here is included as part of the metadata_context (of type google.protobuf.Struct) in the ProcessingRequest message sent to the extension server. The metadata is available under the namespace com.google.authz_extension.<resourceName>. The following variables are supported in the metadata Struct:.

{forwarding_rule_id} - substituted with the forwarding rule's fully qualified resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#metadata NetworkServicesAuthzExtension#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#project NetworkServicesAuthzExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesAuthzExtensionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts">NetworkServicesAuthzExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#timeouts NetworkServicesAuthzExtension#timeouts}

---

##### `wireFormat`<sup>Optional</sup> <a name="wireFormat" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.wireFormat"></a>

```typescript
public readonly wireFormat: string;
```

- *Type:* string

The format of communication supported by the callout extension.

Will be set to EXT_PROC_GRPC by the backend if no value is set. Possible values: ["WIRE_FORMAT_UNSPECIFIED", "EXT_PROC_GRPC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#wire_format NetworkServicesAuthzExtension#wire_format}

---

### NetworkServicesAuthzExtensionTimeouts <a name="NetworkServicesAuthzExtensionTimeouts" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts.Initializer"></a>

```typescript
import { networkServicesAuthzExtension } from '@cdktf/provider-google'

const networkServicesAuthzExtensionTimeouts: networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#create NetworkServicesAuthzExtension#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#delete NetworkServicesAuthzExtension#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#update NetworkServicesAuthzExtension#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#create NetworkServicesAuthzExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#delete NetworkServicesAuthzExtension#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_authz_extension#update NetworkServicesAuthzExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesAuthzExtensionTimeoutsOutputReference <a name="NetworkServicesAuthzExtensionTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkServicesAuthzExtension } from '@cdktf/provider-google'

new networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts">NetworkServicesAuthzExtensionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesAuthzExtensionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts">NetworkServicesAuthzExtensionTimeouts</a>

---



