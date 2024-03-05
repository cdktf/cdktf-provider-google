# `computeRegionNetworkEndpoint` Submodule <a name="`computeRegionNetworkEndpoint` Submodule" id="@cdktf/provider-google.computeRegionNetworkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionNetworkEndpoint <a name="ComputeRegionNetworkEndpoint" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_network_endpoint google_compute_region_network_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.Initializer"></a>

```typescript
import { computeRegionNetworkEndpoint } from '@cdktf/provider-google'

new computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint(scope: Construct, id: string, config: ComputeRegionNetworkEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig">ComputeRegionNetworkEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig">ComputeRegionNetworkEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.resetFqdn">resetFqdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeRegionNetworkEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeouts">ComputeRegionNetworkEndpointTimeouts</a>

---

##### `resetFqdn` <a name="resetFqdn" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.resetFqdn"></a>

```typescript
public resetFqdn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionNetworkEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.isConstruct"></a>

```typescript
import { computeRegionNetworkEndpoint } from '@cdktf/provider-google'

computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.isTerraformElement"></a>

```typescript
import { computeRegionNetworkEndpoint } from '@cdktf/provider-google'

computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.isTerraformResource"></a>

```typescript
import { computeRegionNetworkEndpoint } from '@cdktf/provider-google'

computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.generateConfigForImport"></a>

```typescript
import { computeRegionNetworkEndpoint } from '@cdktf/provider-google'

computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeRegionNetworkEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionNetworkEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionNetworkEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_network_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionNetworkEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference">ComputeRegionNetworkEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.fqdnInput">fqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.regionNetworkEndpointGroupInput">regionNetworkEndpointGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeouts">ComputeRegionNetworkEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.regionNetworkEndpointGroup">regionNetworkEndpointGroup</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionNetworkEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference">ComputeRegionNetworkEndpointTimeoutsOutputReference</a>

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.fqdnInput"></a>

```typescript
public readonly fqdnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `regionNetworkEndpointGroupInput`<sup>Optional</sup> <a name="regionNetworkEndpointGroupInput" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.regionNetworkEndpointGroupInput"></a>

```typescript
public readonly regionNetworkEndpointGroupInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeRegionNetworkEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeouts">ComputeRegionNetworkEndpointTimeouts</a>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `regionNetworkEndpointGroup`<sup>Required</sup> <a name="regionNetworkEndpointGroup" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.regionNetworkEndpointGroup"></a>

```typescript
public readonly regionNetworkEndpointGroup: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionNetworkEndpointConfig <a name="ComputeRegionNetworkEndpointConfig" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.Initializer"></a>

```typescript
import { computeRegionNetworkEndpoint } from '@cdktf/provider-google'

const computeRegionNetworkEndpointConfig: computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.port">port</a></code> | <code>number</code> | Port number of network endpoint. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.regionNetworkEndpointGroup">regionNetworkEndpointGroup</a></code> | <code>string</code> | The network endpoint group this endpoint is part of. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.fqdn">fqdn</a></code> | <code>string</code> | Fully qualified domain name of network endpoint. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_network_endpoint#id ComputeRegionNetworkEndpoint#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.ipAddress">ipAddress</a></code> | <code>string</code> | IPv4 address external endpoint. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_network_endpoint#project ComputeRegionNetworkEndpoint#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.region">region</a></code> | <code>string</code> | Region where the containing network endpoint group is located. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeouts">ComputeRegionNetworkEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port number of network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_network_endpoint#port ComputeRegionNetworkEndpoint#port}

---

##### `regionNetworkEndpointGroup`<sup>Required</sup> <a name="regionNetworkEndpointGroup" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.regionNetworkEndpointGroup"></a>

```typescript
public readonly regionNetworkEndpointGroup: string;
```

- *Type:* string

The network endpoint group this endpoint is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_network_endpoint#region_network_endpoint_group ComputeRegionNetworkEndpoint#region_network_endpoint_group}

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

Fully qualified domain name of network endpoint.

This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_network_endpoint#fqdn ComputeRegionNetworkEndpoint#fqdn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_network_endpoint#id ComputeRegionNetworkEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

IPv4 address external endpoint.

This can only be specified when network_endpoint_type of the NEG is INTERNET_IP_PORT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_network_endpoint#ip_address ComputeRegionNetworkEndpoint#ip_address}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_network_endpoint#project ComputeRegionNetworkEndpoint#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where the containing network endpoint group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_network_endpoint#region ComputeRegionNetworkEndpoint#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionNetworkEndpointTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeouts">ComputeRegionNetworkEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_network_endpoint#timeouts ComputeRegionNetworkEndpoint#timeouts}

---

### ComputeRegionNetworkEndpointTimeouts <a name="ComputeRegionNetworkEndpointTimeouts" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeouts.Initializer"></a>

```typescript
import { computeRegionNetworkEndpoint } from '@cdktf/provider-google'

const computeRegionNetworkEndpointTimeouts: computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_network_endpoint#create ComputeRegionNetworkEndpoint#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_network_endpoint#delete ComputeRegionNetworkEndpoint#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_network_endpoint#create ComputeRegionNetworkEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_network_endpoint#delete ComputeRegionNetworkEndpoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionNetworkEndpointTimeoutsOutputReference <a name="ComputeRegionNetworkEndpointTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeRegionNetworkEndpoint } from '@cdktf/provider-google'

new computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeouts">ComputeRegionNetworkEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionNetworkEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionNetworkEndpoint.ComputeRegionNetworkEndpointTimeouts">ComputeRegionNetworkEndpointTimeouts</a>

---



