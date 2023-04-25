# `data_google_monitoring_istio_canonical_service`

Refer to the Terraform Registory for docs: [`data_google_monitoring_istio_canonical_service`](https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/data-sources/monitoring_istio_canonical_service).

# `dataGoogleMonitoringIstioCanonicalService` Submodule <a name="`dataGoogleMonitoringIstioCanonicalService` Submodule" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleMonitoringIstioCanonicalService <a name="DataGoogleMonitoringIstioCanonicalService" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/data-sources/monitoring_istio_canonical_service google_monitoring_istio_canonical_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer"></a>

```typescript
import { dataGoogleMonitoringIstioCanonicalService } from '@cdktf/provider-google'

new dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService(scope: Construct, id: string, config: DataGoogleMonitoringIstioCanonicalServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig">DataGoogleMonitoringIstioCanonicalServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig">DataGoogleMonitoringIstioCanonicalServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isConstruct"></a>

```typescript
import { dataGoogleMonitoringIstioCanonicalService } from '@cdktf/provider-google'

dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isTerraformElement"></a>

```typescript
import { dataGoogleMonitoringIstioCanonicalService } from '@cdktf/provider-google'

dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isTerraformDataSource"></a>

```typescript
import { dataGoogleMonitoringIstioCanonicalService } from '@cdktf/provider-google'

dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.telemetry">telemetry</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList">DataGoogleMonitoringIstioCanonicalServiceTelemetryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.userLabels">userLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalServiceInput">canonicalServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalServiceNamespaceInput">canonicalServiceNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.meshUidInput">meshUidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalService">canonicalService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalServiceNamespace">canonicalServiceNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.meshUid">meshUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `telemetry`<sup>Required</sup> <a name="telemetry" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.telemetry"></a>

```typescript
public readonly telemetry: DataGoogleMonitoringIstioCanonicalServiceTelemetryList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList">DataGoogleMonitoringIstioCanonicalServiceTelemetryList</a>

---

##### `userLabels`<sup>Required</sup> <a name="userLabels" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.userLabels"></a>

```typescript
public readonly userLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `canonicalServiceInput`<sup>Optional</sup> <a name="canonicalServiceInput" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalServiceInput"></a>

```typescript
public readonly canonicalServiceInput: string;
```

- *Type:* string

---

##### `canonicalServiceNamespaceInput`<sup>Optional</sup> <a name="canonicalServiceNamespaceInput" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalServiceNamespaceInput"></a>

```typescript
public readonly canonicalServiceNamespaceInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `meshUidInput`<sup>Optional</sup> <a name="meshUidInput" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.meshUidInput"></a>

```typescript
public readonly meshUidInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `canonicalService`<sup>Required</sup> <a name="canonicalService" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalService"></a>

```typescript
public readonly canonicalService: string;
```

- *Type:* string

---

##### `canonicalServiceNamespace`<sup>Required</sup> <a name="canonicalServiceNamespace" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalServiceNamespace"></a>

```typescript
public readonly canonicalServiceNamespace: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meshUid`<sup>Required</sup> <a name="meshUid" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.meshUid"></a>

```typescript
public readonly meshUid: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleMonitoringIstioCanonicalServiceConfig <a name="DataGoogleMonitoringIstioCanonicalServiceConfig" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.Initializer"></a>

```typescript
import { dataGoogleMonitoringIstioCanonicalService } from '@cdktf/provider-google'

const dataGoogleMonitoringIstioCanonicalServiceConfig: dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.canonicalService">canonicalService</a></code> | <code>string</code> | The name of the canonical service underlying this service..                       Corresponds to the destination_service_name metric label in Istio metrics. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.canonicalServiceNamespace">canonicalServiceNamespace</a></code> | <code>string</code> | The namespace of the canonical service underlying this service. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.meshUid">meshUid</a></code> | <code>string</code> | Identifier for the Istio mesh in which this canonical service is defined. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/data-sources/monitoring_istio_canonical_service#id DataGoogleMonitoringIstioCanonicalService#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/data-sources/monitoring_istio_canonical_service#project DataGoogleMonitoringIstioCanonicalService#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `canonicalService`<sup>Required</sup> <a name="canonicalService" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.canonicalService"></a>

```typescript
public readonly canonicalService: string;
```

- *Type:* string

The name of the canonical service underlying this service..                       Corresponds to the destination_service_name metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/data-sources/monitoring_istio_canonical_service#canonical_service DataGoogleMonitoringIstioCanonicalService#canonical_service}

---

##### `canonicalServiceNamespace`<sup>Required</sup> <a name="canonicalServiceNamespace" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.canonicalServiceNamespace"></a>

```typescript
public readonly canonicalServiceNamespace: string;
```

- *Type:* string

The namespace of the canonical service underlying this service.

Corresponds to the destination_service_namespace metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/data-sources/monitoring_istio_canonical_service#canonical_service_namespace DataGoogleMonitoringIstioCanonicalService#canonical_service_namespace}

---

##### `meshUid`<sup>Required</sup> <a name="meshUid" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.meshUid"></a>

```typescript
public readonly meshUid: string;
```

- *Type:* string

Identifier for the Istio mesh in which this canonical service is defined.

Corresponds to the meshUid metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/data-sources/monitoring_istio_canonical_service#mesh_uid DataGoogleMonitoringIstioCanonicalService#mesh_uid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/data-sources/monitoring_istio_canonical_service#id DataGoogleMonitoringIstioCanonicalService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/data-sources/monitoring_istio_canonical_service#project DataGoogleMonitoringIstioCanonicalService#project}.

---

### DataGoogleMonitoringIstioCanonicalServiceTelemetry <a name="DataGoogleMonitoringIstioCanonicalServiceTelemetry" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetry.Initializer"></a>

```typescript
import { dataGoogleMonitoringIstioCanonicalService } from '@cdktf/provider-google'

const dataGoogleMonitoringIstioCanonicalServiceTelemetry: dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetry = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleMonitoringIstioCanonicalServiceTelemetryList <a name="DataGoogleMonitoringIstioCanonicalServiceTelemetryList" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.Initializer"></a>

```typescript
import { dataGoogleMonitoringIstioCanonicalService } from '@cdktf/provider-google'

new dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.get"></a>

```typescript
public get(index: number): DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference <a name="DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer"></a>

```typescript
import { dataGoogleMonitoringIstioCanonicalService } from '@cdktf/provider-google'

new dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetry">DataGoogleMonitoringIstioCanonicalServiceTelemetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleMonitoringIstioCanonicalServiceTelemetry;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetry">DataGoogleMonitoringIstioCanonicalServiceTelemetry</a>

---



